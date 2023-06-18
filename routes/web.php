<?php

use App\Http\Controllers\ItemController;
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

Route::get('/new', [ItemController::class, 'create'])->middleware('auth');

Route::get('login', [UserController::class, 'login'])->name('login')->middleware('guest');
Route::get('logout', [UserController::class, 'logout'])->middleware('auth');

Route::get('register', [UserController::class, 'register'])->middleware('guest');
Route::post('register', [UserController::class, 'store'])->middleware('guest');

Route::get('layout', function() {
  return Inertia::render('Layout');
});

Route::get('profile', function () {
  return Inertia::render('ProfileView');
});