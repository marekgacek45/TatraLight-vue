<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Inertia\Inertia;
use App\Mail\TestEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(ContactRequest $request)
    {

 $validatedData = $request->validated();

$details = [
    'title' => 'Nowa wiadomość z Tatralight.pl',
    'name' => $validatedData['name'],
    'email' => $validatedData['email'],
    'phone' => $validatedData['phone'],
    'message' => $validatedData['message'],
];
       
        Mail::to(env('MAIL_TO_ADDRESS'))
        ->cc(env('MAIL_TO_ADDRESS_2'))->send(new TestEmail($details));
       
        // return back()->with('message_sent','Your message has been sent successfully!');
        return Inertia::render('Contact', ['message_sent' => 'Your message has been sent successfully!']);

    }
    
}