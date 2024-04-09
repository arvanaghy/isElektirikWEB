<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {

        $message = array(
            'type' => 'success',
            'text' => 'Welcome'
        );


        return Inertia::render('Welcome', [
            'url' => '/',
            'language' => 'en',
            'message' => $message
        ]);
    }


    public function about_us(): Response
    {
        return Inertia::render('AboutUs', [
            'url' => '/about-us',
            'language' => 'en'
        ]);
    }

    public function contact_us(): Response
    {
        return Inertia::render('ContactUs', [
            'url' => '/contact-us',
            'language' => 'en'
        ]);
    }



    public function tr_index(): Response
    {
        return Inertia::render('Tr/Welcome', [
            'url' => '/',
            'language' => 'tr'
        ]);
    }

    public function tr_about_us(): Response
    {

        return Inertia::render('Tr/AboutUs', [
            'url' => '/about-us',
            'language' => 'tr'
        ]);
    }

    public function tr_contact_us(): Response
    {

        return Inertia::render('Tr/ContactUs', [
            'url' => '/contact-us',
            'language' => 'tr'
        ]);
    }
}
