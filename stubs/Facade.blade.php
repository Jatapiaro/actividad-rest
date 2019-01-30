@php
  echo "<?php
";
@endphp
namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class {{ $name }}Facade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return '{{ $name }}';
    }
}
