<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'USER_ORG_DETAILS';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'USER_ID',
        'USER_VCDS_UID',
        'LDAP_UID',
        'USER_FIRSTNAME',
        'USER_LASTNAME',
        'EMAIL',
        'TEL',
        'VCDS_DELETE',
        'USER_FUNCTION',
        'USER_CONTRACTOR',
        'USER_UPDATED',
        'TEAM_ID',
        'TEAM_NAME',
        'TEAM_GROUP',
        'USER_DEPARTMENT',
        'TL',
        'GL',
        'AL',
        'UPDATE_DATE'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
