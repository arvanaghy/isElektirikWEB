<?php

namespace App\Http\Controllers;

use App\Models\GeneralModel;
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
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        return Inertia::render('ContactUs', [
            'url' => '/contact-us',
            'language' => 'en',
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
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
