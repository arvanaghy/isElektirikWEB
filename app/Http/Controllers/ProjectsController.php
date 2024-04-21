<?php

namespace App\Http\Controllers;

use App\Models\ProjectImagesModel;
use App\Models\ProjectsModel;
use App\Models\ProjectVideosModel;
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
                    'description_en' => $project->slug,
                    'province' => $project->slug,
                    'image' => $image ? $image->image : null
                )
            );
        }

       return Inertia::render('Projects/All', [
            'projects' => $projects_list,
            'lastPage'=> $projects->lastPage(),
            'currentPage'=> $projects->currentPage(),
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
}
