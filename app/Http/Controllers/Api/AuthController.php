<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    
    public function signup(SignupRequest $request) {
        
        /** @var \App\Models\User $usuario */

        $data = $request->validated();
        $usuario = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),

        ]);
        $token = $usuario -> createToken('main')->plainTextToken;

        return response([
            'usuario' => $usuario,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request){
        $credenciales = $request->validated();
        if(!Auth::attempt($credenciales)){
            return response ([
                'mensaje' => 'Correo o contraseña incorrecto'
            ], 422);
        }

        /** @var User $usuario */

        $usuario = Auth::user();
        $token = $usuario->createToken('main')->plainTextToken;

        return response([
            'usuario' => $usuario,
            'token' => $token,
            'redirect_url' => '/mientorno'
        ]);
    }

    public function logout(Request $request){
        /** @var User $usuario */

        $usuario = $request->user();
        $usuario->currentAccessToken()->delete();
        return response('', 204);
    }
}
