<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormatoVenta extends Model
{
    use HasFactory;

    protected $table = 'formatos_ventas';

    protected $fillable = [
        'nombre'
    ];
}
