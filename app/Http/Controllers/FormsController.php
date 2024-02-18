<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;
use Inertia\Inertia;

class FormsController extends Controller
{
    public function contact(Request $request)
    {
        // $validated = $request->validated();

        $request->validate([
          'name' => 'required',
      ]);

      Mail::send('email-template', [
        'name' => $request->get('name'),
        ],
        function ($message) {
                $message->from(env('MAIL_USERNAME'));
                $message->to(env('MAIL_USERNAME'))->cc('marekgacek45@gmail.com')
                // $message->to(env('MAIL_USERNAME'))->cc(env('SECONDARY_EMAIL'))
                ->subject('Nowa wiadomość ze strony podajlapsie.pl');
    });

    return redirect()->back();
    
       
    }
}
