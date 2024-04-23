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
        
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();

        return Inertia::render('Welcome', [
            'url' => '/',
            'language' => 'en',
            'message' => $message,
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_en' => $about_us_text_en,

        ]);
    }


    public function about_us(): Response
    {

        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();

        return Inertia::render('AboutUs', [
            'url' => '/about-us',
            'language' => 'en',
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_en' => $about_us_text_en,
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
        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();

        return Inertia::render('ContactUs', [
            'url' => '/contact-us',
            'language' => 'en',
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_en' => $about_us_text_en,
        ]);
    }



    public function tr_index(): Response
    {
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_tr = GeneralModel::where('general_key', 'about_us_text_tr')->first();
        return Inertia::render('Tr/Welcome', [
            'url' => '/',
            'language' => 'tr',
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_tr' => $about_us_text_tr,
        ]);
    }

    public function tr_about_us(): Response
    {
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_tr = GeneralModel::where('general_key', 'about_us_text_tr')->first();
        return Inertia::render('Tr/AboutUs', [
            'url' => '/about-us',
            'language' => 'tr',
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_tr' => $about_us_text_tr,
        ]);
    }

    public function tr_contact_us(): Response
    {
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_tr = GeneralModel::where('general_key', 'about_us_text_tr')->first();
        return Inertia::render('Tr/ContactUs', [
            'url' => '/contact-us',
            'language' => 'tr',
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_tr' => $about_us_text_tr,
        ]);
    }
}
