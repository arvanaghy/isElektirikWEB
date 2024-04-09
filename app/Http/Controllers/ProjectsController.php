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
        $projects = ProjectsModel::get();
        foreach ($projects as $project) {
            $image = ProjectImagesModel::select('name as image')->where('project_id', $project->id)->first();
            array_push(
                $projects_list,
                array(
                    'id' => $project->id,
                    'name' => $project->name,
                    'slug' => $project->slug,
                    'image' => $image ? $image->image : null
                )
            );
        }

        return Inertia::render('Projects/All', [
            'projects' => $projects_list
        ]);
    }


    public function details($slug)
    {
        $images = null;
        $videos = null;
        $details = ProjectsModel::where('slug', $slug)->first();
        if ($details) {
            $images = ProjectImagesModel::where('project_id', $details->id)->get();
            $videos = ProjectVideosModel::where('project_id', $details->id)->get();
        }
        return Inertia::render('Projects/Details', [
            'details' => $details,
        ]);
    }
}
