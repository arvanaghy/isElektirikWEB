<?php

namespace App\Http\Controllers;

use App\Models\ClienttModel;
use App\Models\GeneralModel;
use App\Models\ProjectImagesModel;
use App\Models\ProjectsModel;
use App\Models\ServicesModel;
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

        $feauters_1_text_en = GeneralModel::where('general_key', 'feauters_1_text_en')->first();
        $feauters_2_text_en = GeneralModel::where('general_key', 'feauters_2_text_en')->first();
        $feauters_3_text_en = GeneralModel::where('general_key', 'feauters_3_text_en')->first();
        $feauters_4_text_en = GeneralModel::where('general_key', 'feauters_4_text_en')->first();

        $hero_section_text_en = GeneralModel::where('general_key', 'hero_section_text_en')->first();
        $slogan_text_en = GeneralModel::where('general_key', 'slogan_text_en')->first();


        $our_clients = ClienttModel::orderBy('id', 'desc')->limit(8)->get();

        $projects_lists = [];

        $our_projects = ProjectsModel::orderBy('id', 'desc')->limit(6)->get();
        foreach ($our_projects as $project) {
            $image = ProjectImagesModel::select('name as image')->where('project_id', $project->id)->first();
            array_push(
                $projects_lists,
                array(
                    'id' => $project->id,
                    'name' => $project->name,
                    'slug' => $project->slug,
                    'description_en' => $project->description_en,
                    'province' => $project->province,
                    'image' => $image ? $image->image : null
                )
            );
        }


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
            'feauters_1_text_en' => $feauters_1_text_en,
            'feauters_2_text_en' => $feauters_2_text_en,
            'feauters_3_text_en' => $feauters_3_text_en,
            'feauters_4_text_en' => $feauters_4_text_en,
            'hero_section_text_en' => $hero_section_text_en,
            'slogan_text_en' => $slogan_text_en,
            'our_clients' => $our_clients,
            'our_projects' => $projects_lists,
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
        $hero_section_text_en = GeneralModel::where('general_key', 'hero_section_text_en')->first();

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
            'hero_section_text_en' => $hero_section_text_en,
        ]);
    }

    public function our_services(): Response
    {

        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();
        $electrical_services = ServicesModel::where('type', 'electrical')->orderBy('id', 'desc')->get();
        $mechanical_services = ServicesModel::where('type', 'mechanical')->orderBy('id', 'desc')->get();

        return Inertia::render('OurServices', [
            'url' => '/our-services',
            'language' => 'en',
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_en' => $about_us_text_en,
            'electrical_services' => $electrical_services,
            'mechanical_services' => $mechanical_services,
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




        $feauters_1_text_tr = GeneralModel::where('general_key', 'feauters_1_text_tr')->first();
        $feauters_2_text_tr = GeneralModel::where('general_key', 'feauters_2_text_tr')->first();
        $feauters_3_text_tr = GeneralModel::where('general_key', 'feauters_3_text_tr')->first();
        $feauters_4_text_tr = GeneralModel::where('general_key', 'feauters_4_text_tr')->first();

        $hero_section_text_tr = GeneralModel::where('general_key', 'hero_section_text_tr')->first();
        $slogan_text_tr = GeneralModel::where('general_key', 'slogan_text_tr')->first();


        $our_clients = ClienttModel::orderBy('id', 'desc')->limit(8)->get();

        $projects_lists = [];

        $our_projects = ProjectsModel::orderBy('id', 'desc')->limit(6)->get();
        foreach ($our_projects as $project) {
            $image = ProjectImagesModel::select('name as image')->where('project_id', $project->id)->first();
            array_push(
                $projects_lists,
                array(
                    'id' => $project->id,
                    'name' => $project->name,
                    'slug' => $project->slug,
                    'description_en' => $project->description_en,
                    'province' => $project->province,
                    'image' => $image ? $image->image : null
                )
            );
        }


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
            'feauters_1_text_tr' => $feauters_1_text_tr,
            'feauters_2_text_tr' => $feauters_2_text_tr,
            'feauters_3_text_tr' => $feauters_3_text_tr,
            'feauters_4_text_tr' => $feauters_4_text_tr,
            'hero_section_text_tr' => $hero_section_text_tr,
            'slogan_text_tr' => $slogan_text_tr,
            'our_clients' => $our_clients,
            'our_projects' => $projects_lists,
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
        $hero_section_text_tr = GeneralModel::where('general_key', 'hero_section_text_tr')->first();


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
            'hero_section_text_tr' => $hero_section_text_tr,
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

    public function tr_our_services(): Response
    {

        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_tr = GeneralModel::where('general_key', 'about_us_text_tr')->first();
        $electrical_services = ServicesModel::where('type', 'electrical')->orderBy('id', 'desc')->get();
        $mechanical_services = ServicesModel::where('type', 'mechanical')->orderBy('id', 'desc')->get();

        return Inertia::render('Tr/OurServices', [
            'url' => '/our-services',
            'language' => 'tr',
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_tr' => $about_us_text_tr,
            'electrical_services' => $electrical_services,
            'mechanical_services' => $mechanical_services,
        ]);
    }
}
