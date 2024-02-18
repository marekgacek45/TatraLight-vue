<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller
{
    public function __invoke(ContactRequest $request){
Mail::to('marekgacek45@gmail.com')->send(new ContactMail($request->name));

return redirect()->back();
    }
}
