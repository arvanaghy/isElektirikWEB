<?php

namespace App\Http\Controllers;

use App\Models\ProjectImagesModel;
use App\Models\ProjectsModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class ProjectsController extends Controller
{
    public function index(): Response
    {
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
        ]);
    }

    public function tr_index(): Response
    {
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
        ]);
    }


    public function details($slug)
    {
        $images = null;
        $project_detail = ProjectsModel::where('slug', $slug)->first();

        if ($project_detail) {
            $images = ProjectImagesModel::where('project_id', $project_detail->id)->get();
        }

        return Inertia::render('Projects/Details', [
            'project_detail' => $project_detail,
        ]);
    }

    public function search(Request $request)
    {

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
        ]);
    }

    public function search_tr(Request $request)
    {

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
        ]);
    }
}
