<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
  public function create() {
    return Inertia::render('SignUpView');
  }

  public function store(Request $request) {
    User::create($request->validate([
      'username' => ['required', 'unique:App\Models\User,username', 'max:255'],
      'email' => ['required', 'unique:App\Models\User,email', 'email'],
      'name' => ['required', 'max:255'],
      'last_name' => ['required', 'max:255'],
      'phone_number' => ['numeric', 'max:255'],
      'password' => ['required', 'min:8', 'max:255']
    ]));
    return redirect('/')->with('success', 'account has been created');
  }
}
