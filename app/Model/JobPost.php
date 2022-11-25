<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class JobPost extends Model
{
    //
    
    protected $fillable = [
        'idUser', 'idJobtype','idCompany','idlocation','CreateDate','is_active'
        ,'description',
    ];


  
}
