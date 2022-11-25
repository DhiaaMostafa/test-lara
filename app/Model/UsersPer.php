<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UsersPer extends Model
{
    //

    protected $fillable = [
        'name', 'idType','dateBrith','gender','email','password','isActive','phone',
    ];

   
}
