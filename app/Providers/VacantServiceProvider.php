<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\VacantService;

class VacantServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return  void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return  void
     */
    public function register()
    {
        $this->app->bind('VacantService', function($app)
        {
            return new VacantService();
        });
    }
}
