<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ECatalogModel extends Model
{
    use HasFactory;

    protected $table = 'ecatalog';
    protected $fillable = ['name', 'download_filename', 'description', 'created_at', 'updated_at'];

}
