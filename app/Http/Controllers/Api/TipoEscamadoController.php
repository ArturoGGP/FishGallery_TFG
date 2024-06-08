<?php

namespace App\Http\Controllers\Api;

use App\Models\TipoEscamado;
use App\Http\Requests\StoreTipoEscamadoRequest;
use App\Http\Requests\UpdateTipoEscamadoRequest;
use App\Http\Resources\TipoEscamadoResource;
use App\Http\Controllers\Controller;

class TipoEscamadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TipoEscamadoResource::collection( TipoEscamado::query()->orderBy('id', 'asc')->paginate() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTipoEscamadoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTipoEscamadoRequest $request)
    {
        $data = $request->validated();
        $tipoEscamado = TipoEscamado::create($data);

        return response(new TipoEscamadoResource($tipoEscamado),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TipoEscamado  $tipoEscamado
     * @return \Illuminate\Http\Response
     */
    public function show(TipoEscamado $tipoEscamado)
    {
        return new TipoEscamadoResource($tipoEscamado);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTipoEscamadoRequest  $request
     * @param  \App\Models\TipoEscamado  $tipoEscamado
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTipoEscamadoRequest $request, TipoEscamado $tipoEscamado)
    {
        $data = $request->validated();
        $tipoEscamado->update($data);

        return new TipoEscamadoResource($tipoEscamado);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TipoEscamado  $tipoEscamado
     * @return \Illuminate\Http\Response
     */
    public function destroy(TipoEscamado $tipoEscamado)
    {
        $tipoEscamado->delete();
        return response("", 204);
    }
}
