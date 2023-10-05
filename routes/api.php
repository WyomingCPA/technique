<?php

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

Route::get('refrigerator', 'ProductController@refrigeratorKot');
Route::get('washmasine', 'ProductController@washmasineKot');

Route::group(['prefix' => 'dashboard', 'middleware' => 'auth:sanctum'], function () {
	Route::get('/index', 'DashboardController@index');
});

Route::group(['prefix' => 'product', 'middleware' => 'auth:sanctum'], function () {
    Route::get('refrigerator', 'ProductController@index');
    Route::get('washmashine', 'ProductController@washmashine');
    Route::get('tv32', 'ProductController@tv32');
    Route::get('tv40', 'ProductController@tv40');
    Route::get('tv50', 'ProductController@tv50');
    Route::get('smart', 'ProductController@smart');
    Route::get('laptop', 'ProductController@laptop');
    Route::get('favorite', 'ProductController@favorite');
    Route::get('sales', 'ProductController@sales');
    Route::get('changes', 'ProductController@changes');
    Route::post('set-learn', 'ProductController@learn');
    Route::post('set-favorite', 'ProductController@setFavorite');

    Route::get('/edit/{id}', 'ProductController@edit');
	Route::post('/update', 'ProductController@update');
    
});

Route::group(['prefix' => 'category', 'middleware' => 'auth:sanctum'], function () {
    Route::get('index', 'CategoryController@index');
    Route::post('/store', 'CategoryController@store');
    Route::post('/set-limit', 'CategoryController@setLimit');
});

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');