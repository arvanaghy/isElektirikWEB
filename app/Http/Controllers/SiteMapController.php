<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class SitemapController extends Controller
{
    public function generateSitemap()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        // Add static pages
        $staticPages = ['/', '/about', '/contact'];
        foreach ($staticPages as $page) {
            $sitemap .= '<url>';
            $sitemap .= '<loc>' . url($page) . '</loc>';
            $sitemap .= '<lastmod>' . Carbon::now()->toAtomString() . '</lastmod>';
            $sitemap .= '<changefreq>monthly</changefreq>';
            $sitemap .= '<priority>0.8</priority>';
            $sitemap .= '</url>';
        }

        // Add dynamic pages (e.g., blog posts)
        // $posts = Post::all();
        // foreach ($posts as $post) {
        //     $sitemap .= '<url>';
        //     $sitemap .= '<loc>' . url('/post/' . $post->slug) . '</loc>';
        //     $sitemap .= '<lastmod>' . $post->updated_at->toAtomString() . '</lastmod>';
        //     $sitemap .= '<changefreq>weekly</changefreq>';
        //     $sitemap .= '<priority>0.8</priority>';
        //     $sitemap .= '</url>';
        // }

        $sitemap .= '</urlset>';

        Storage::disk('public')->put('sitemap.xml', $sitemap);

        return response()->json(['message' => 'Sitemap generated successfully']);
    }
}
