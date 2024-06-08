<?php

namespace App\Http\Controllers\Api;

use App\Models\Tienda;
use App\Http\Requests\StoreTiendaRequest;
use App\Http\Requests\UpdateTiendaRequest;
use App\Http\Resources\TiendaResource;
use App\Http\Controllers\Controller;

class TiendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TiendaResource::collection( Tienda::query()->orderBy('id', 'asc')->paginate() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTiendaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTiendaRequest $request)
    {
        $data = $request->validated();
        $tienda = Tienda::create($data);

        return response(new TiendaResource($tienda),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function show(Tienda $tienda)
    {
        return new TiendaResource($tienda);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTiendaRequest  $request
     * @param  \App\Models\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTiendaRequest $request, Tienda $tienda)
    {
        $data = $request->validated();
        $tienda->update($data);

        return new TiendaResource($tienda);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tienda $tienda)
    {
        $tienda->delete();
        return response("", 204);
    }
}
