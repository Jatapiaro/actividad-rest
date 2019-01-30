<?php
namespace App\Exceptions;

use Exception;

class JatapiaroServiceException extends Exception
{
    public function __construct($message = "Error on JatapiaroService",
        $code = 403,
        Exception $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
