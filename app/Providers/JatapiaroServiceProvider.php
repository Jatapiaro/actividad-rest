<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\JatapiaroService;

class JatapiaroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('JatapiaroService', function($app)
        {
            return new JatapiaroService();
        });
    }
}
