<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralModel extends Model
{
    use HasFactory;

    protected $table = 'general';

    protected $fillable = [
        'general_key',
        'general_value',
    ];
}
