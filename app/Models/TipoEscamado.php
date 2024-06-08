<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoEscamado extends Model
{
    use HasFactory;

    protected $table = 'tipos_escamado';

    protected $fillable = [
        'nombre'
    ];
}
