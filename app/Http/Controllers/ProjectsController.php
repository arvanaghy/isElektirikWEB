<?php

namespace App\Http\Controllers;

use App\Models\GeneralModel;
use App\Models\ProjectImagesModel;
use App\Models\ProjectsModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class ProjectsController extends Controller
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
        $projects_list = array();
        $projects = ProjectsModel::paginate(12);
        foreach ($projects as $project) {
            $image = ProjectImagesModel::select('name as image')->where('project_id', $project->id)->first();
            array_push(
                $projects_list,
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

        return Inertia::render('Projects/All', [
            'projects' => $projects_list,
            'lastPage' => $projects->lastPage(),
            'currentPage' => $projects->currentPage(),
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
        $projects_list = array();
        $projects = ProjectsModel::paginate(12);
        foreach ($projects as $project) {
            $image = ProjectImagesModel::select('name as image')->where('project_id', $project->id)->first();
            array_push(
                $projects_list,
                array(
                    'id' => $project->id,
                    'name' => $project->name,
                    'slug' => $project->slug,
                    'description_tr' => $project->description_tr,
                    'province' => $project->province,
                    'image' => $image ? $image->image : null
                )
            );
        }

        return Inertia::render('Tr/Projects/All', [
            'projects' => $projects_list,
            'lastPage' => $projects->lastPage(),
            'currentPage' => $projects->currentPage(),
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_tr' => $about_us_text_tr,
        ]);
    }


    public function details($slug)
    {
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();
        $images = null;
        $project_detail = ProjectsModel::where('slug', $slug)->first();

        if ($project_detail) {
            $images = ProjectImagesModel::where('project_id', $project_detail->id)->get();
        }

        $other_projects_list = [];
        $other_projects = ProjectsModel::where('id', '!=', $project_detail->id)->orderBy('id', 'desc')->limit(6)->get();

        foreach ($other_projects as $project) {
            $image = ProjectImagesModel::select('name as image')->where('project_id', $project->id)->first();
            array_push(
                $other_projects_list,
                array(
                    'id' => $project->id,
                    'name' => $project->name,
                    'slug' => $project->slug,
                    'start_date' => $project->start_date,
                    'end_date' => $project->end_date,
                    'image' => $image ? $image->image : null
                )
            );
        }


        return Inertia::render('Projects/Details', [
            'project_detail' => $project_detail,
            'images' => $images,
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_en' => $about_us_text_en,
            'other_projects' => $other_projects_list,
        ]);
    }

    public function search(Request $request)
    {
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_en = GeneralModel::where('general_key', 'about_us_text_en')->first();
        $searchPhrases = explode(' ', $request->q);

        $projects_list = array();
        $projects = ProjectsModel::query();
        foreach ($searchPhrases as $phrase) {
            $projects = $projects->where('name', 'like', '%' . $phrase . '%');
        }
        $projects = $projects->orderBy('id', 'desc')->paginate(12);

        foreach ($projects as $project) {
            $image = ProjectImagesModel::select('name as image')->where('project_id', $project->id)->first();
            array_push(
                $projects_list,
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


        return Inertia::render('Projects/All', [
            'projects' => $projects_list,
            'lastPage' => $projects->lastPage(),
            'currentPage' => $projects->currentPage(),
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'insta' => $insta,
            'telegram' => $telegram,
            'linkdin' => $linkdin,
            'about_us_text_en' => $about_us_text_en,
        ]);
    }

    public function search_tr(Request $request)
    {
        $address = GeneralModel::where('general_key', 'address')->first();
        $phone = GeneralModel::where('general_key', 'phone')->first();
        $email = GeneralModel::where('general_key', 'email')->first();
        $insta = GeneralModel::where('general_key', 'insta')->first();
        $telegram = GeneralModel::where('general_key', 'telegram')->first();
        $linkdin = GeneralModel::where('general_key', 'linkdin')->first();
        $about_us_text_tr = GeneralModel::where('general_key', 'about_us_text_tr')->first();
        $searchPhrases = explode(' ', $request->q);

        $projects_list = array();
        $projects = ProjectsModel::query();
        foreach ($searchPhrases as $phrase) {
            $projects = $projects->where('name', 'like', '%' . $phrase . '%');
        }
        $projects = $projects->orderBy('id', 'desc')->paginate(12);

        foreach ($projects as $project) {
            $image = ProjectImagesModel::select('name as image')->where('project_id', $project->id)->first();
            array_push(
                $projects_list,
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


        return Inertia::render('Tr/Projects/All', [
            'projects' => $projects_list,
            'lastPage' => $projects->lastPage(),
            'currentPage' => $projects->currentPage(),
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
