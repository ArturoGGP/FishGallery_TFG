<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre' => 'required|string|max:55',
            'precio' => ['required', 'numeric', 'regex:/^\d{1,6}(\.\d{0,2})?$/'],
            'porPeso' => ['required', 'numeric', 'regex:/^\d{1,5}(\.\d{0,3})?$/'],
            'tipoPescado_id' => 'required|integer|exists:tipos_pescado,id',
            'formatoVenta_id' => 'required|integer|exists:formatos_ventas,id',
            'escamado_id' => 'required|integer|exists:tipos_escamado,id',
            'pais_id' => 'required|integer|exists:paises,id',
            'imagen' => 'string|max:255'
        ];
    }
}
