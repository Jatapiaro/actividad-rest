<?php
namespace App\Exceptions;

use Exception;

class EmployeeServiceException extends Exception
{
    public function __construct($message = "Error on EmployeeService",
        $code = 403,
        Exception $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
