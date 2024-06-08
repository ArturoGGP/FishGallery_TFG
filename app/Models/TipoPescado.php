<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoPescado extends Model
{
    use HasFactory;
    
    protected $table = 'tipos_pescado';

    protected $fillable = [
        'nombre',
        'descripcion'     
    ];
}
