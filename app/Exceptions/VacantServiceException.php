<?php
namespace App\Exceptions;

use Exception;

class VacantServiceException extends Exception
{
    public function __construct($message = "Error on VacantService",
        $code = 403,
        Exception $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
