<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\File;

use Illuminate\Http\Request;
use App\Models\ECatalogModel;
use Inertia\Inertia;
use Inertia\Response;

class AdminCatalog extends Controller
{
    public function index(){
        $catalog = ECatalogModel::paginate(24);
        return Inertia::render('Admin/AdminCatalog', [
            'catalog_list' => $catalog,
        ]);
    }

    public function create(){
        return Inertia::render('Admin/CreateCatalog');
    }

    public function store(Request $request){
        $request->validate([
            'title' => 'required',
            'description' => 'sometimes',
        ]);


        if($request->hasfile('images'))
        {
            if (!File::isDirectory(public_path().'/catalog')) {
                File::MakeDirectory(public_path().'/catalog' , 0777, true, true);
            }
            foreach($request->file('images') as $file)
            {
                $name = time().'_'.$file->getClientOriginalName();
                $file->move(public_path().'/catalog/', $name); 
                $data[] = $name;  
            }
        }

        $catalog = new ECatalogModel();
        $catalog->title = $request->title;
        $catalog->description = $request->description;
        $catalog->save();
        return redirect('/admin-catalog');
    }

    public function edit($id){
        $catalog = ECatalogModel::find($id);
        return Inertia::render('Admin/EditCatalog', [
            'catalog' => $catalog,
        ]);
    }

    public function destroy($id){
        $catalog = ECatalogModel::find($id);
        $catalog->delete();
        return redirect('/admin-catalog');
    }
    public function update(Request $request, $id){
        $request->validate([
            'title' => 'required',
            'description' => 'sometimes',
        ]);


        if($request->hasfile('images'))
        {
            if (!File::isDirectory(public_path().'/catalog')) {
                File::MakeDirectory(public_path().'/catalog' , 0777, true, true);
            }
            foreach($request->file('images') as $file)
            {
                $name = time().'_'.$file->getClientOriginalName();
                $file->move(public_path().'/catalog/', $name); 
                $data[] = $name;  
            }
        }

        $catalog = ECatalogModel::find($id);
        $catalog->title = $request->title;
        $catalog->description = $request->description;
        $catalog->save();
        return redirect('/admin-catalog');
    }
}