<?php
namespace App\Services;

use Illuminate\Validation\ValidationException;
use Validator;

use App\Exceptions\EmployeeServiceException;
use App\Models\Employee;

class EmployeeService {
    /**
     * Creates a Employee given the data array
     *
     * @param  array $data
     * @return  App\Models\Employee
     */
    public function Create($data) {
        // Validate that the data array is correct
        $this->ValidateDataAgainstModel($data);
        // Create the object
        $result = Employee::create($data);
        return $result;
    }

    /**
     * Creates a Employee given the data array
     *
     * @param  Employee $item
     * @param  array $data
     * @return  App\Models\Employee
     */
    public function Update(Employee $item, $data) {
        // Validate that the data array is correct
        $this->ValidateDataAgainstModel($data);
        // Update the attributes
        $item->update($data);
        return $item;
    }

    /**
     * Validates the given data against the model if data is not
     * valid it will throw an exception
     *
     * @return  void
     */
    public function ValidateDataAgainstModel($data) {
        $book = Employee::ValidationBook();
        $validator = Validator::make($data,
            $book['rules'],
            $book['messages']);
        if ($validator->fails()) {
            $errors = $validator->errors();
            throw ValidationException::withMessages($errors->toArray());
        }
    }
}
