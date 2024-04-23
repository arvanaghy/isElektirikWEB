<?php

namespace App\Http\Controllers;

use App\Models\ECatalogModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ECatalogController extends Controller
{
    public function index(): Response
    {
        $catalogs = ECatalogModel::orderBy('id', 'desc')->paginate(12);
        return Inertia::render('ECatalog', [
            'catalog_list' => $catalogs,
            'lastPage' => $catalogs->lastPage(),
            'currentPage' => $catalogs->currentPage(),
        ]);
    }

    public function tr_index(): Response
    {
        $catalogs = ECatalogModel::orderBy('id', 'desc')->paginate(12);
        return Inertia::render('Tr/ECatalog', [
            'catalog_list' => $catalogs,
            'lastPage' => $catalogs->lastPage(),
            'currentPage' => $catalogs->currentPage(),
        ]);
    }

}
