<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SessionController extends Controller
{
  public function create() {
    return Inertia::render('LoginView');
  }

  public function store(Request $request) {
    $credentials = $request->validate([
      'email' => ['required', 'email'],
      'password' => ['required'],
    ]);

    if(Auth::attempt($credentials)) {
      $request->session()->regenerate();

      return redirect()->intended()->with('message', 'Successfully logged in!');
    }

    return back()->withErrors([
      'password' => 'Invalid credentials. Please try again.',
    ]);
  }

  public function destroy() {
    Auth::logout();

    return redirect('/')->with('message', 'Successfully logged out!');
  }
}
