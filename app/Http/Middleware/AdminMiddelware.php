<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddelware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->user() !== null && auth()->user()->is_admin !== 1) {
            return redirect()->route('home')->with('error', 'Bu sayfaya erişmek yetkiniz yok!');
        }
        return $next($request);
    }
}
