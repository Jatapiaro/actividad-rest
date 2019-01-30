@php
  echo "<?php
";
@endphp
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\{{ $name }};

class {{ $name }}Provider extends ServiceProvider
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
        $this->app->bind('{{ $name }}', function($app)
        {
            return new {{ $name }}();
        });
    }
}
