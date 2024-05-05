<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;

use App\Models\ClienttModel;
use Inertia\Inertia;
use Inertia\Response;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;


use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        $clients_list = array();
        $clients = ClienttModel::orderBy('created_at', 'desc')->paginate(12);
        return Inertia::render('Admin/Clients', [
            'clients' => $clients
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/AddClient');
    }

    public function store(Request $request)
    {
        $client = new ClienttModel();

        if ($request->hasfile('images')) {

            $file = $request->file('images')[0];
            $image_name = time() . '_' . $file->getClientOriginalName();
            Storage::disk('public')->put($image_name, File::get($file));
        }
        $client->name = $request->name;
        $client->image_name = $image_name;
        $client->save();
        return redirect()->route('AdminClient');
    }

    public function destroy($id)
    {
        $client = ClienttModel::find($id);
        $client->delete();
        return redirect()->route('AdminClient');
    }
}
