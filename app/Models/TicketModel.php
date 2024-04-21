<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketModel extends Model
{
    use HasFactory;

    protected $table = 'tickets';
    protected $fillable = [
        'name',
        'call_info',
        'message',
        'created_at',
        'updated_at',
    ];

}
