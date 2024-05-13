<?php

use App\Http\Controllers\ECatalogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\AdminProjectController;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\AdminCatalog;
use App\Http\Controllers\AdminServicesController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\SitemapController;

use App\Http\Middleware\AdminMiddelware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'tr_index'])->name('tr-home');
Route::get('about-us', [HomeController::class, 'tr_about_us'])->name('tr-about-us');
Route::get('contact-us', [HomeController::class, 'tr_contact_us'])->name('tr-contact-us');
Route::get('our-services', [HomeController::class, 'tr_our_services'])->name('tr-our-services');
Route::get('e-catalog', [ECatalogController::class, 'tr_index'])->name('tr-e-catalog');
Route::get('projects', [ProjectsController::class, 'tr_index'])->name('tr-projects');
Route::get('project-details/{slug}', [ProjectsController::class, 'tr_details']);
Route::get('search', [ProjectsController::class, 'search_tr']);


Route::get('/en/', [HomeController::class, 'index'])->name('home');
Route::get('/en/about-us', [HomeController::class, 'about_us'])->name('about-us');
Route::get('/en/contact-us', [HomeController::class, 'contact_us'])->name('contact-us');
Route::get('/en/our-services', [HomeController::class, 'our_services'])->name('our-services');
Route::get('/en/e-catalog', [ECatalogController::class, 'index'])->name('e-catalog');
Route::get('/en/projects', [ProjectsController::class, 'index'])->name('projects');
Route::get('/en/project-details/{slug}', [ProjectsController::class, 'details']);
Route::get('/en/search', [ProjectsController::class, 'search']);

Route::get('/site-map', [SitemapController::class, 'generateSitemap']);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/general-admin', [GeneralController::class, 'index'])->name('generalAdmin');

    Route::get('/projects-admin', [AdminProjectController::class, 'index'])->name('projectsAdmin');
    Route::get('/edit-project/{id}', [AdminProjectController::class, 'edit']);
    Route::delete('/deleteProject/{id}', [AdminProjectController::class, 'destroy']);
    Route::get('/add-project', [AdminProjectController::class, 'create'])->name('addProject');
    Route::post('/submit-project', [AdminProjectController::class, 'store']);
    Route::post('/update-project/{id}', [AdminProjectController::class, 'update']);
    Route::post('/update-project-images/{id}', [AdminProjectController::class, 'updateImages']);
    Route::delete('/delete-project-image/{id}', [AdminProjectController::class, 'deleteImages']);


    Route::get('/services-admin', [AdminServicesController::class, 'index'])->name('servicesAdmin');
    Route::get('/add-service', [AdminServicesController::class, 'create']);
    Route::post('/submit-services', [AdminServicesController::class, 'store']);
    Route::delete('/delete-service/{id}', [AdminServicesController::class, 'destroy']);
    Route::get('/edit-service/{id}', [AdminServicesController::class, 'edit']);
    Route::post('/update-service/{id}', [AdminServicesController::class, 'update']);


    Route::get('/contacts-admin', [GeneralController::class, 'list_tickets'])->name('contactsAdmin');

    Route::get('/edit-call-info', [GeneralController::class, 'editCallInfo'])->name('EditCallInfo');
    Route::post('/edit-call-info', [GeneralController::class, 'updateCallInfo']);


    Route::get('/edit-slogan', [GeneralController::class, 'editSlogan'])->name('EditSlogan');
    Route::post('/edit-slogan', [GeneralController::class, 'updateSlogan']);

    Route::get('/edit-about-us', [GeneralController::class, 'editAboutUs'])->name('EditAboutUs');
    Route::post('/edit-about-us', [GeneralController::class, 'updateAboutUs']);

    Route::get('/edit-hero', [GeneralController::class, 'editHero'])->name('EditHero');
    Route::post('/edit-hero', [GeneralController::class, 'updateHero']);

    Route::get('/edit-features', [GeneralController::class, 'editFeauters'])->name('EditFeatures');
    Route::post('/edit-features', [GeneralController::class, 'updateFeatures']);

    Route::get('/admin-clients', [ClientController::class, 'index'])->name('AdminClient');
    Route::get('/add-clients', [ClientController::class, 'create'])->name('AddClient');
    Route::post('/add-clients', [ClientController::class, 'store']);
    Route::delete('/delete-clients/{id}', [ClientController::class, 'destroy']);

    Route::post('/submit-ticket', [GeneralController::class, 'storeTicket']);

    Route::get('/admin-catalog', [AdminCatalog::class, 'index'])->name('AdminCatalog');
    Route::get('/add-catalog', [AdminCatalog::class, 'create']);
    Route::post('/submit-catalog', [AdminCatalog::class, 'store']);
    Route::delete('/delete-catalog/{id}', [AdminCatalog::class, 'destroy']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
