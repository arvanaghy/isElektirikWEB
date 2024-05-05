<?php

namespace App\Http\Controllers;

use App\Models\ServicesModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = ServicesModel::orderBy('id', 'desc')->paginate(24);
        return Inertia::render('Admin/Services', [
            'services' => $services
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/AddService');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $service = new ServicesModel();
        $service->title_en = $request->title_en;
        $service->title_tr = $request->title_tr;
        $service->description_en = $request->description_en;
        $service->description_tr = $request->description_tr;
        $service->type = $request->type;
        $service->save();
        return redirect('/services-admin');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $service = ServicesModel::find($id);
        return Inertia::render('Admin/EditService', [
            'service' => $service
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $service = ServicesModel::find($id);
        $service->title_en = $request->title_en;
        $service->title_tr = $request->title_tr;
        $service->description_en = $request->description_en;
        $service->description_tr = $request->description_tr;
        $service->type = $request->type;
        $service->save();
        return redirect('/services-admin');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $service = ServicesModel::find($id);
        $service->delete();
        return redirect('/services-admin');
    }
}
