<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use GuzzleHttp\Cookie\SessionCookieJar;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Item;

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
    return Inertia::render('IndexView', [
      'items' => Item::all(),
    ]);
});

Route::get('/new', [ItemController::class, 'create'])->middleware('auth');
Route::post('/new', [ItemController::class, 'store'])->middleware('auth');

Route::get('login', [SessionController::class, 'create'])->name('login')->middleware('guest');
Route::post('login', [SessionController::class, 'store']);
Route::post('logout', [SessionController::class, 'destroy'])->middleware('auth');

Route::get('register', [UserController::class, 'create'])->middleware('guest');
Route::post('register', [UserController::class, 'store'])->middleware('guest');

Route::get('profile', function () {
  return Inertia::render('ProfileView');
});