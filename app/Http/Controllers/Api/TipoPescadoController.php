<?php

namespace App\Http\Controllers\Api;

use App\Models\TipoPescado;
use App\Http\Requests\StoreTipoPescadoRequest;
use App\Http\Requests\UpdateTipoPescadoRequest;
use App\Http\Resources\TipoPescadoResource;
use App\Http\Controllers\Controller;

class TipoPescadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TipoPescadoResource::collection( TipoPescado::query()->orderBy('id', 'asc')->paginate() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTipoPescadoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTipoPescadoRequest $request)
    {
        $data = $request->validated();
        $tipoPescado = TipoPescado::create($data);

        return response(new TipoPescadoResource($tipoPescado),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TipoPescado  $tipoPescado
     * @return \Illuminate\Http\Response
     */
    public function show(TipoPescado $tipoPescado)
    {
        return new TipoPescadoResource($tipoPescado);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTipoPescadoRequest  $request
     * @param  \App\Models\TipoPescado  $tipoPescado
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTipoPescadoRequest $request, TipoPescado $tipoPescado)
    {
        $data = $request->validated();
        $tipoPescado->update($data);

        return new TipoPescadoResource($tipoPescado);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TipoPescado  $tipoPescado
     * @return \Illuminate\Http\Response
     */
    public function destroy(TipoPescado $tipoPescado)
    {
        $tipoPescado->delete();
        return response("", 204);
    }
}
