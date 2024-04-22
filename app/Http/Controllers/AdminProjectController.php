<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;

use Illuminate\Http\Request;
use App\Models\ProjectsModel;
use App\Models\ProjectImagesModel;
use Inertia\Inertia;
use Inertia\Response;
use Intervention\Image\ImageManagerStatic as Image;



class AdminProjectController extends Controller
{
    public function index()
    {
        $projects = ProjectsModel::paginate(24);
        return Inertia::render('Admin/ProjectsAdmin', [
            'projects_list' => $projects,
        ]);
    }

    public function edit($id)
    {
        $project = ProjectsModel::findOrFail($id);

        if ($project) {
            $images = ProjectImagesModel::where('project_id', $id)->get();
        } else {
            $images = null;
        }
        return Inertia::render('Admin/EditProject', [
            'project' => $project,
            'images' => $images,
        ]);
    }

    public function destroy($id)
    {
        $project = ProjectsModel::findOrFail($id);
        $project->delete();
        return redirect()->route('projectsAdmin');
    }

    public function update(Request $request, $id)
    {
        $project = ProjectsModel::findOrFail($id);
        $project->name = $request->name;
        $project->slug = $request->slug;
        $project->start_date = $request->start_date;
        $project->end_date = $request->end_date;
        $project->description_tr = $request->description_tr;
        $project->description_en = $request->description_en;
        $project->province = $request->province;
        $project->alley = $request->alley;
        $project->location = $request->location;

        $project->save();
        return redirect()->route('projectsAdmin');
    }

    public function create(Request $request)
    {

        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:projects',
            'startDate' => 'required',
            'endDate' => 'sometimes',
            'descriptionTr' => 'required',
            'descriptionEn' => 'required',
            'province' => 'required',
            'alley' => 'sometimes',
            'location' => 'required',
        ]);

        $project = new ProjectsModel();

        if ($request->hasfile('images')) {
            if (!File::isDirectory(public_path() . '/images/projects/orignial')) {
                File::MakeDirectory(public_path() . '/images/projects/orignial', 0777, true, true);
            }
            if (!File::isDirectory(public_path() . '/images/projects/webp')) {
                File::MakeDirectory(public_path() . '/images/projects/webp', 0777, true, true);
            }
            foreach ($request->file('images') as $file) {
                $name = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path() . '/images/projects/orignial/', $name);
                Image::configure(['driver' => 'gd']);
                Image::make(public_path() . '/images/projects/orignial/' . $name)->encode('webp', 80)->resize(250, 250)->save(public_path() . '/images/projects/webp/' . $time() . '_' . ".webp", 100);
                $data[] = $name;
            }
        }

        $project->name = $request->title;
        $project->slug = $request->slug;
        $project->start_date = $request->startDate;
        $project->end_date = $request->endDate;
        $project->description_tr = $request->descriptionTr;
        $project->description_en = $request->descriptionEn;
        $project->province = $request->province;
        $project->alley = $request->alley;
        $project->location = $request->titlocationle;
        $project->save();

        return redirect()->route('projectsAdmin');
    }

    public function store(Request $request)
    {
        $project = new ProjectsModel();
        $project->name = $request->name;
        $project->description = $request->description;
        $project->save();
        return redirect()->route('projectsAdmin');
    }
}
