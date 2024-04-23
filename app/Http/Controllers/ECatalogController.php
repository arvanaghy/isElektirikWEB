<?php

namespace App\Http\Controllers;

use App\Models\GeneralModel;
use App\Models\ECatalogModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ECatalogController extends Controller
{
    public function index(): Response
    {
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();
        $catalogs = ECatalogModel::orderBy('id', 'desc')->paginate(12);


        return Inertia::render('ECatalog', [
            'catalog_list' => $catalogs,
            'lastPage' => $catalogs->lastPage(),
            'currentPage' => $catalogs->currentPage(),
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
        $catalogs = ECatalogModel::orderBy('id', 'desc')->paginate(12);
        return Inertia::render('Tr/ECatalog', [
            'catalog_list' => $catalogs,
            'lastPage' => $catalogs->lastPage(),
            'currentPage' => $catalogs->currentPage(),
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
