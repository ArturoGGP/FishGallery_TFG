<?php

namespace App\Http\Controllers\Api;

use App\Models\FormatoVenta;
use App\Http\Requests\StoreFormatoVentaRequest;
use App\Http\Requests\UpdateFormatoVentaRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\FormatoVentaResource;

class FormatoVentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FormatoVentaResource::collection( FormatoVenta::query()->orderBy('id', 'asc')->paginate() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFormatoVentaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFormatoVentaRequest $request)
    {
        $data = $request->validated();
        $formatoVenta = FormatoVenta::create($data);

        return response(new FormatoVentaResource($formatoVenta),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FormatoVenta  $formatoVenta
     * @return \Illuminate\Http\Response
     */
    public function show(FormatoVenta $formatoVenta)
    {
        return new FormatoVentaResource($formatoVenta);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFormatoVentaRequest  $request
     * @param  \App\Models\FormatoVenta  $formatoVenta
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFormatoVentaRequest $request, FormatoVenta $formatoVenta)
    {
        $data = $request->validated();
        $formatoVenta->update($data);

        return new FormatoVentaResource($formatoVenta);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FormatoVenta  $formatoVenta
     * @return \Illuminate\Http\Response
     */
    public function destroy(FormatoVenta $formatoVenta)
    {
        $formatoVenta->delete();
        return response("", 204);
    }
}
