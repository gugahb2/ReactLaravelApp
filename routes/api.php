<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssetController;

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

Route::get('/asset/button-1', [AssetController::class, 'getAssetForButton1']);
Route::get('/asset/button-2', [AssetController::class, 'getAssetForButton2']);
Route::get('/asset/button-3', [AssetController::class, 'getAssetForButton3']);
