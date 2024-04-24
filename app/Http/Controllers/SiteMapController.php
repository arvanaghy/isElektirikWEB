<?php

namespace App\Http\Controllers;

use App\Models\ProjectsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;

class SitemapController extends Controller
{
    public function generateSitemap()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        // Add static pages
        $staticPages = ['/', '/about-us', '/contact-us', '/projects', '/e-catalog', '/tr/', '/tr/about-us', '/tr/contact-us', '/tr/projects', '/tr/e-catalog'];
        foreach ($staticPages as $page) {
            $sitemap .= '<url>';
            $sitemap .= '<loc>' . url($page) . '</loc>';
            $sitemap .= '<lastmod>' . Carbon::now()->toAtomString() . '</lastmod>';
            $sitemap .= '<changefreq>monthly</changefreq>';
            $sitemap .= '<priority>0.8</priority>';
            $sitemap .= '</url>';
        }

        // Add dynamic pages (e.g., blog projects)
        $projects = ProjectsModel::all();
        foreach ($projects as $project) {
            $sitemap .= '<url>';
            $sitemap .= '<loc>' . url('/project-details/' . $project->slug) . '</loc>';
            $sitemap .= '<lastmod>' . $project->updated_at->toAtomString() . '</lastmod>';
            $sitemap .= '<changefreq>weekly</changefreq>';
            $sitemap .= '<priority>0.8</priority>';
            $sitemap .= '</url>';
        }

        $sitemap .= '</urlset>';

        File::put(public_path('sitemap.xml'), $sitemap);

        return redirect('/sitemap.xml');
    }
}
