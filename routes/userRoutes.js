const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.registerUser);
router.get('/:userId', UserController.getUserById);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);
router.get('/', UserController.listUsers);

module.exports = router;
