<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\EmployeeService;

class EmployeeServiceProvider extends ServiceProvider
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
        $this->app->bind('EmployeeService', function($app)
        {
            return new EmployeeService();
        });
    }
}
