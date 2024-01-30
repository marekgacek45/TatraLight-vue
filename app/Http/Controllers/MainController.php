<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(){
        return inertia('Index');
    }
    public function about(){
        return inertia('About');
    }
    public function contact(){
        return inertia('Contact');
    }
}
