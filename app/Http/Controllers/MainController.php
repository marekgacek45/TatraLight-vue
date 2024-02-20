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
        $bigImages = File::files(public_path('/assets/images/big/'));
        $smallImages = File::files(public_path('/assets/images/small/'));
    
        $formattedImages = collect($bigImages)->map(function ($bigImage) use ($smallImages) {
            $filename = $bigImage->getFilename();
            $smallImage = collect($smallImages)->first(function ($smallImage) use ($filename) {
                return $smallImage->getFilename() === $filename;
            });
    
            return [
                'src' => asset(str_replace(public_path(), '', $bigImage->getPathname())),
                'thumbnail' => $smallImage ? asset(str_replace(public_path(), '', $smallImage->getPathname())) : null,
            ];
        })->shuffle()->toArray();
    
        return inertia('Realisations',['images'=>$formattedImages]);
    }
    
    public function contact(){
        return inertia('Contact');
    }
    public function privacyPolicy(){
        return inertia('PrivacyPolicy');
    }
}
