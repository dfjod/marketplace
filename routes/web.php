<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('IndexView');
});

Route::get('/new', function() {
  return Inertia::render('CreateView');
});

Route::get('/signin', function() {
  return Inertia::render('SignInView');
});

Route::get('/signup', [UserController::class, 'create']);
Route::post('/signup', [UserController::class, 'store']);