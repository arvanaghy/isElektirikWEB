<?php

use App\Http\Controllers\ECatalogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\AdminProjectController;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\AdminCatalog;
use App\Http\Controllers\ClientController;

use App\Http\Middleware\AdminMiddelware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('about-us', [HomeController::class, 'about_us'])->name('about-us');
Route::get('contact-us', [HomeController::class, 'contact_us'])->name('contact-us');
Route::get('e-catalog', [ECatalogController::class, 'index'])->name('e-catalog');
Route::get('projects', [ProjectsController::class, 'index'])->name('projects');
Route::get('project-details/{slug}', [ProjectsController::class, 'details']);

Route::get('/tr/', [HomeController::class, 'tr_index'])->name('tr-home');
Route::get('/tr/about-us', [HomeController::class, 'tr_about_us'])->name('tr-about-us');
Route::get('/tr/contact-us', [HomeController::class, 'tr_contact_us'])->name('tr-contact-us');
Route::get('/tr/e-catalog', [ECatalogController::class, 'tr_index'])->name('tr-e-catalog');
Route::get('/tr/projects', [ProjectsController::class, 'tr_index'])->name('tr-projects');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', AdminMiddelware::class])->name('dashboard');

Route::middleware(['auth', 'verified', AdminMiddelware::class])->group(function () {
    Route::get('/general-admin', [GeneralController::class, 'index'])->name('generalAdmin');

    Route::get('/projects-admin', [AdminProjectController::class, 'index'])->name('projectsAdmin');
    Route::get('/edit-project/{id}', [AdminProjectController::class, 'edit'])->name('projectsEditAdmin');
    Route::delete('/deleteProject/{id}', [AdminProjectController::class, 'destroy']);
    Route::get('/add-project', function () {
        return Inertia::render('Admin/AddProject');
    })->name('addProject');
    Route::post('/submit-project', [AdminProjectController::class, 'create']);


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

    Route::get('/edit-catalog', function () {
        return Inertia::render('EditCatalog');
    })->name('EditCatalog');

    Route::get('/admin-clients', [ClientController::class, 'index'])->name('AdminClient');
    Route::get('/add-clients', [ClientController::class, 'create'])->name('AddClient');
    Route::post('/add-clients', [ClientController::class, 'store']);
    Route::delete('/delete-clients/{id}', [ClientController::class, 'destroy']);

    Route::post('/submit-ticket', [GeneralController::class, 'storeTicket']);

    Route::get('/admin-catalog', [AdminCatalog::class, 'index'])->name('AdminCatalog');
    Route::get('/add-catalog', [AdminCatalog::class, 'create']);
    Route::post('/submit-catalog', [AdminCatalog::class, 'store']);
    Route::delete('/delete-catalog/{id}', [AdminCatalog::class, 'destroy']);
    Route::get('/edit-catalog/{id}', [AdminCatalog::class, 'edit']);
    Route::put('/update-catalog/{id}', [AdminCatalog::class, 'update']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
