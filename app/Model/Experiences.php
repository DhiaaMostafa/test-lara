<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Experiences extends Model
{
    //

    protected $fillable = [
        'is_currentJob', 'startdate','endDate','nameJob','CompanyName','location',
        'description',
    ];


  

}
