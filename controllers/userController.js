const { exit } = require('process');
const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    try {
        console.log(req.body, "req.body vicky")
        const exitUser = await User.findOne({ email: req.body.email });

        if(exitUser) {
            console.log('email is already exits!!!')
            res.status(500).send('email already exits.');

        } else {  
            const user = new User(req.body);
            await user.save();
            console.log('User is Inserted')
            res.status(200).json(user);
        
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getUserById = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.json(user);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.json(user);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.status(204).send("User Deleted");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.listUsers = async (req, res) => {
    try {
        const { firstName, lastName, email, phone } = req.query;
        console.log("scdeced")
        const whereClause = {
            firstName: { $regex: new RegExp(firstName, 'i') },
            lastName: { $regex: new RegExp(lastName, 'i') },
            email: { $regex: new RegExp(email, 'i') },
            //phone: { $regex: new RegExp(phone, 'i') },
        };

        const users = await User.find(whereClause);
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
