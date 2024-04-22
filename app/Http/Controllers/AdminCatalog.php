<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;

use Illuminate\Http\Request;
use App\Models\ECatalogModel;
use Inertia\Inertia;
use Inertia\Response;

class AdminCatalog extends Controller
{
    public function index()
    {
        $catalog = ECatalogModel::paginate(24);
        return Inertia::render('Admin/AdminCatalog', [
            'catalog_list' => $catalog,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/CreateCatalog');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'sometimes',
        ]);



        if ($request->hasfile('images')) {
            if (!File::isDirectory(public_path() . '/catalog')) {
                File::MakeDirectory(public_path() . '/catalog', 0777, true, true);
            }

            $file = $request->file('images')[0];

            $fileName = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path() . '/catalog/', $fileName);
        }


        $catalog = new ECatalogModel();
        $catalog->title = $request->title;
        $catalog->description = $request->description;
        $catalog->download_filename = $fileName;
        $catalog->save();
        return redirect('/admin-catalog');
    }

    public function edit($id)
    {
        $catalog = ECatalogModel::find($id);
        return Inertia::render('Admin/EditCatalog', [
            'catalog' => $catalog,
        ]);
    }

    public function destroy($id)
    {
        $catalog = ECatalogModel::find($id);
        if (File::exists(public_path() . '/catalog/' . $catalog->download_filename)) {
            File::delete(public_path() . '/catalog/' . $catalog->download_filename);
        }
        $catalog->delete();
        return redirect('/admin-catalog');
    }
}
