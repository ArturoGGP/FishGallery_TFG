<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductoResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'precio' => $this->precio,
            'porPeso' => $this->porPeso,
            'tipoPescado_id' => $this->tipoPescado_id,
            'formatoVenta_id' => $this->formatoVenta_id,
            'escamado_id' => $this->escamado_id, 
            'pais_id' => $this->pais_id,
            'imagen' => $this->imagen,
            'created_at' => $this->created_at->format('d-m-Y H:m:s')  
        ];
    }
}
