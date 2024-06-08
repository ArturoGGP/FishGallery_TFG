<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'precio',
        'porPeso',
        'tipoPescado_id',
        'formatoVenta_id',
        'escamado_id',
        'pais_id',
        'imagen'        
    ];

}
