<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TicketModel;
use App\Models\GeneralModel;
use Inertia\Inertia;
use Inertia\Response;



class GeneralController extends Controller
{
    public function storeTicket(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'call_info' => ['required'],
            'message' => ['required', 'string'],
        ]);
        $ticket = new TicketModel();
        $ticket->name = $request->name;
        $ticket->call_info = $request->call_info;
        $ticket->message = $request->message;
        $ticket->save();

        return redirect()->route('home');
    }

    public function list_tickets()
    {
        $tickets = TicketModel::orderBy('id', 'desc')->paginate(12);

        return Inertia::render('Admin/ContactsAdmin', [
            'tickets' => $tickets
        ]);
    }

    public function index()
    {
        $slogan_tr = GeneralModel::where('general_key', 'slogan_text_tr')->first();
        $slogan_en = GeneralModel::where('general_key', 'slogan_text_en')->first();
        $feauters_1_text_tr = GeneralModel::where('general_key', 'feauters_1_text_tr')->first();
        $feauters_1_text_en = GeneralModel::where('general_key', 'feauters_1_text_en')->first();
        $feauters_2_text_tr = GeneralModel::where('general_key', 'feauters_2_text_tr')->first();
        $feauters_2_text_en = GeneralModel::where('general_key', 'feauters_2_text_en')->first();
        $feauters_3_text_tr = GeneralModel::where('general_key', 'feauters_3_text_tr')->first();
        $feauters_3_text_en = GeneralModel::where('general_key', 'feauters_3_text_en')->first();
        $feauters_4_text_tr = GeneralModel::where('general_key', 'feauters_4_text_tr')->first();
        $feauters_4_text_en = GeneralModel::where('general_key', 'feauters_4_text_en')->first();

        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkedin = GeneralModel::where('general_key', 'linkdin')->first();

        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();
        $about_us_text_tr = GeneralModel::where('general_key', 'about_us_text_tr')->first();


        $hero_section_text_en = GeneralModel::where('general_key', 'hero_section_text_en')->first();
        $hero_section_text_tr = GeneralModel::where('general_key', 'hero_section_text_tr')->first();



        return Inertia::render('Admin/GeneralAdmin', [
            'slogan_tr' => $slogan_tr,
            'slogan_en' => $slogan_en,
            'feauters_1_text_tr' => $feauters_1_text_tr,
            'feauters_1_text_en' => $feauters_1_text_en,
            'feauters_2_text_tr' => $feauters_2_text_tr,
            'feauters_2_text_en' => $feauters_2_text_en,
            'feauters_3_text_tr' => $feauters_3_text_tr,
            'feauters_3_text_en' => $feauters_3_text_en,
            'feauters_4_text_tr' => $feauters_4_text_tr,
            'feauters_4_text_en' => $feauters_4_text_en,

            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'telegram' => $telegram,
            'instagram' => $insta,
            'linkedin' => $linkedin,

            'about_us_text_en' => $about_us_text_en,
            'about_us_text_tr' => $about_us_text_tr,


            'hero_section_text_en' => $hero_section_text_en,
            'hero_section_text_tr' => $hero_section_text_tr,

        ]);
    }

    public function editSlogan()
    {
        $slogan_en = GeneralModel::where('general_key', 'slogan_text_en')->first();
        $slogan_tr = GeneralModel::where('general_key', 'slogan_text_tr')->first();

        return Inertia::render('Admin/EditSlogan', [
            'slogan_en' => $slogan_en,
            'slogan_tr' => $slogan_tr
        ]);
    }

    public function updateSlogan(Request $request)
    {
        $slogan_en = GeneralModel::where('general_key', 'slogan_text_en')->first();
        $slogan_tr = GeneralModel::where('general_key', 'slogan_text_tr')->first();

        $slogan_en->general_value = $request->slogan_en;
        $slogan_tr->general_value = $request->slogan_tr;

        $slogan_en->save();
        $slogan_tr->save();

        return redirect()->route('generalAdmin');
    }


    public function editAboutUs()
    {

        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();
        $about_us_text_tr = GeneralModel::where('general_key', 'about_us_text_tr')->first();

        return Inertia::render('Admin/EditAboutUs', [
            'about_us_text_en' => $about_us_text_en,
            'about_us_text_tr' => $about_us_text_tr
        ]);
    }

    public function updateAboutUs(Request $request)
    {
        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();
        $about_us_text_tr = GeneralModel::where('general_key', 'about_us_text_tr')->first();

        $about_us_text_en->general_value = $request->about_us_text_en;
        $about_us_text_tr->general_value = $request->about_us_text_tr;


        $about_us_text_en->save();
        $about_us_text_tr->save();

        return redirect()->route('generalAdmin');
    }


    public function editHero(){

        $hero_section_text_en = GeneralModel::where('general_key', 'hero_section_text_en')->first();
        $hero_section_text_tr = GeneralModel::where('general_key', 'hero_section_text_tr')->first();

        return Inertia::render('Admin/EditHero', [
            'hero_section_text_en' => $hero_section_text_en,
            'hero_section_text_tr' => $hero_section_text_tr
        ]);
    }

    public function updateHero(Request $request){

        $hero_section_text_en = GeneralModel::where('general_key', 'hero_section_text_en')->first();
        $hero_section_text_tr = GeneralModel::where('general_key', 'hero_section_text_tr')->first();

        $hero_section_text_en->general_value = $request->hero_section_text_en;
        $hero_section_text_tr->general_value = $request->hero_section_text_tr;

        $hero_section_text_en->save();
        $hero_section_text_tr->save();

        return redirect()->route('generalAdmin');

    }

    public function editFeauters(){

        $feauters_1_text_tr = GeneralModel::where('general_key', 'feauters_1_text_tr')->first();
        $feauters_1_text_en = GeneralModel::where('general_key', 'feauters_1_text_en')->first();
        $feauters_2_text_tr = GeneralModel::where('general_key', 'feauters_2_text_tr')->first();
        $feauters_2_text_en = GeneralModel::where('general_key', 'feauters_2_text_en')->first();
        $feauters_3_text_tr = GeneralModel::where('general_key', 'feauters_3_text_tr')->first();
        $feauters_3_text_en = GeneralModel::where('general_key', 'feauters_3_text_en')->first();
        $feauters_4_text_tr = GeneralModel::where('general_key', 'feauters_4_text_tr')->first();
        $feauters_4_text_en = GeneralModel::where('general_key', 'feauters_4_text_en')->first();

        return Inertia::render('Admin/EditFeauters', [
            'feauters_1_text_tr' => $feauters_1_text_tr,
            'feauters_1_text_en' => $feauters_1_text_en,
            'feauters_2_text_tr' => $feauters_2_text_tr,
            'feauters_2_text_en' => $feauters_2_text_en,
            'feauters_3_text_tr' => $feauters_3_text_tr,
            'feauters_3_text_en' => $feauters_3_text_en,
            'feauters_4_text_tr' => $feauters_4_text_tr,
            'feauters_4_text_en' => $feauters_4_text_en
        ]);

    }

    public function updateFeatures(Request $request){

        $feauters_1_text_tr = GeneralModel::where('general_key', 'feauters_1_text_tr')->first();
        $feauters_1_text_en = GeneralModel::where('general_key', 'feauters_1_text_en')->first();
        $feauters_2_text_tr = GeneralModel::where('general_key', 'feauters_2_text_tr')->first();
        $feauters_2_text_en = GeneralModel::where('general_key', 'feauters_2_text_en')->first();
        $feauters_3_text_tr = GeneralModel::where('general_key', 'feauters_3_text_tr')->first();
        $feauters_3_text_en = GeneralModel::where('general_key', 'feauters_3_text_en')->first();
        $feauters_4_text_tr = GeneralModel::where('general_key', 'feauters_4_text_tr')->first();
        $feauters_4_text_en = GeneralModel::where('general_key', 'feauters_4_text_en')->first();

        $feauters_1_text_tr->general_value = $request->feauters_1_text_tr;
        $feauters_1_text_en->general_value = $request->feauters_1_text_en;
        $feauters_2_text_tr->general_value = $request->feauters_2_text_tr;
        $feauters_2_text_en->general_value = $request->feauters_2_text_en;
        $feauters_3_text_tr->general_value = $request->feauters_3_text_tr;
        $feauters_3_text_en->general_value = $request->feauters_3_text_en;
        $feauters_4_text_tr->general_value = $request->feauters_4_text_tr;
        $feauters_4_text_en->general_value = $request->feauters_4_text_en;

        $feauters_1_text_tr->save();
        $feauters_1_text_en->save();
        $feauters_2_text_tr->save();
        $feauters_2_text_en->save();
        $feauters_3_text_tr->save();
        $feauters_3_text_en->save();
        $feauters_4_text_tr->save();
        $feauters_4_text_en->save();

        return redirect()->route('generalAdmin');

    }

    public function editCallInfo(){
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();

        return Inertia::render('Admin/EditCallInfo', [
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin
        ]);
    }

    public function updateCallInfo(Request $request){
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();

        $address->general_value = $request->address;
        $phone->general_value = $request->phone;
        $email->general_value = $request->email;
        $insta->general_value = $request->insta;
        $telegram->general_value = $request->telegram;
        $linkdin->general_value = $request->linkdin;

        $address->save();
        $phone->save();
        $email->save();
        $insta->save();
        $telegram->save();
        $linkdin->save();

        return redirect()->route('generalAdmin');

    }

}
