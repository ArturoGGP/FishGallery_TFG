<?php

namespace App\Http\Controllers\Api;

use App\Models\Pais;
use App\Http\Requests\StorePaisRequest;
use App\Http\Requests\UpdatePaisRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\PaisResource;

class PaisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PaisResource::collection( Pais::query()->orderBy('id', 'asc')->paginate() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePaisRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaisRequest $request)
    {
        $data = $request->validated();
        $pais = Pais::create($data);

        return response(new PaisResource($pais),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pais  $pais
     * @return \Illuminate\Http\Response
     */
    public function show(Pais $pais)
    {
        return new PaisResource($pais);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePaisRequest  $request
     * @param  \App\Models\Pais  $pais
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePaisRequest $request, Pais $pais)
    {
        $data = $request->validated();
        $pais->update($data);

        return new PaisResource($pais);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pais  $pais
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pais $pais)
    {
        $pais->delete();
        return response("", 204);
    }
}
