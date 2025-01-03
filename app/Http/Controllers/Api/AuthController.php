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
    public function signup(SignupRequest $request){
       $data = $request->validated();

        /** @var \App\Models\User $user  */
       $user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('token','user'));
        // return response()->json([
            // 'token' => $token,
            // 'user' => $user
        // ]);

    }

    public function login(LoginRequest $request)
    {

        $credential = $request->validated();
        if (!Auth::attempt($credential)) {
            return response()->json([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }


    public function logout(Request $request){
        /** @var \App\Models\User $user */
        $user = $request->user();
        // var_dump($user->currentAccessToken()->id);
        $user->currentAccessToken()->delete();
        // $user = request()->user();
        // $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return response('', 204);

    }

}
