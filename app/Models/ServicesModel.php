<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicesModel extends Model
{
    use HasFactory;

    protected $table = 'services';
    protected $fillable = ['title_en', 'description_en', 'title_tr', 'description_tr',  'type'];
}
