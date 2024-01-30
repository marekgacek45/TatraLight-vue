<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class MainController extends Controller
{
    public function index(){
        return inertia('Index');
    }
    public function about(){
        return inertia('About');
    }
    public function realisations(){

        $images = File::files(public_path('/assets/images/small/'));
        $formattedImages = collect($images)->map(function ($image) {
            return [
                'path' => asset(str_replace(public_path(), '', $image->getPathname())),
                'filename' => $image->getFilename(),
                'extension' => $image->getExtension(),
                // inne potrzebne informacje
            ];
        })->toArray();


        // dd($formattedImages);
        

        return inertia('Realisations',['images'=>$formattedImages]);
    }
    public function contact(){
        return inertia('Contact');
    }


  
}
