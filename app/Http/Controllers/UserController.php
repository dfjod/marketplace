<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
  public function register() {
    return Inertia::render('RegisterView');
  }

  public function login() {
    return Inertia::render('LoginView');
  }

  public function logout() {
    auth()->logout();

    return redirect('/')->with('message', 'Successfully logged out!');
  }

  public function store(Request $request) {
    $user = User::create($request->validate([
      'username' => ['required', 'unique:App\Models\User,username', 'max:255'],
      'email' => ['required', 'unique:App\Models\User,email', 'email'],
      'name' => ['required', 'max:255'],
      'last_name' => ['required', 'max:255'],
      'password' => ['required', 'min:8', 'max:255']
    ]));

    auth()->login($user);

    return redirect('/')->with('message', 'Successfully Registered!');
  }
}
