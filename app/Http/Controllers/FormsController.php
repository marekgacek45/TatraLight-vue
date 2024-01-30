<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;

class FormsController extends Controller
{
    public function contact(ContactRequest $request)
    {

      $request->validated();

    }
}
