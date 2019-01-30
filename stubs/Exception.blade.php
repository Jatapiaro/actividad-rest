@php
  echo "<?php
";
@endphp
namespace App\Exceptions;

use Exception;

class {{ $name }}Exception extends Exception
{
    public function __construct($message = "Error on {{ $name }}",
        $code = 403,
        Exception $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
