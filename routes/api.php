<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProductoController;
use App\Http\Controllers\Api\TipoPescadoController;
use App\Http\Controllers\Api\TipoEscamadoController;
use App\Http\Controllers\Api\FormatoVentaController;
use App\Http\Controllers\Api\PaisController;
use App\Http\Controllers\Api\TiendaController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')
->group(function(){
    
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('/usuarios', UserController::class);
});

Route::apiResource('/productos', ProductoController::class);
Route::apiResource('/tiposPescado', TipoPescadoController::class);
Route::apiResource('/tiposEscamado', TipoEscamadoController::class);
Route::apiResource('/formatosVenta', FormatoVentaController::class);
Route::apiResource('/paises', PaisController::class);
Route::apiResource('/tiendas', TiendaController::class);
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

