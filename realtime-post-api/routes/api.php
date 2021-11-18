<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\PostLikeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/post', [PostController::class, 'store']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/post/{post}', [PostController::class, 'show']);
Route::post('/posts/{post}/like', [PostLikeController::class, 'store']);
Route::get('/profile/{user}', [ProfileController::class, 'show']);
