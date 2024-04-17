<?php

use App\Http\Controllers\ECatalogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
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
})->middleware(['auth', 'verified' , AdminMiddelware::class])->name('dashboard');

Route::middleware(['auth', 'verified' , AdminMiddelware::class])->group(function () {
    Route::get('/general-admin', function () {
        return Inertia::render('GeneralAdmin');
    })->name('generalAdmin');
    Route::get('/projects-admin', function () {
        return Inertia::render('ProjectsAdmin');
    })->name('projectsAdmin');
    Route::get('/contacts-admin', function () {
        return Inertia::render('ContactsAdmin');
    })->name('contactsAdmin');
    Route::get('/add-project', function () {
        return Inertia::render('AddProject');
    })->name('addProject');
    Route::get('/edit-call-info', function () {
        return Inertia::render('EditCallInfo');
    })->name('EditCallInfo');
    Route::get('/edit-about-us', function () {
        return Inertia::render('EditAboutUs');
    })->name('EditAboutUs');
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
