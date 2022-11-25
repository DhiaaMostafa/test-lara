<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    //

    protected $fillable = [
        'degree', 'major','unversity','startDate','completeDate','description',
    ];

    
}
