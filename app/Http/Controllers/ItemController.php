<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use Illuminate\Support\Facades\Auth;

class ItemController extends Controller
{
  public function create() {
    return Inertia::render('CreateView');
  }

  public function store(Request $request) {
    $attributes = $request->validate([
      'title' => ['required', 'max:255'],
      'price' => ['required', 'decimal:2'],
      'description' => ['required', 'max:1000'],
      'picture_link' => ['url']
    ]);

    $attributes += ['user_id' => Auth::id()];

    Item::create($attributes);

    return redirect('/')->with('message', 'Item successfully created!');
  }
}
