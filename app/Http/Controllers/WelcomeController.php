<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    /**
     * Show the application.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        \JavaScript::put([
            'baseUrl' => config('app.url')
		]);
        return view('welcome');
    }
}
