<?php
namespace App\Services;

use Illuminate\Validation\ValidationException;
use Validator;

use App\Exceptions\VacantServiceException;
use App\Models\Vacant;

class VacantService {
    /**
     * Creates a Vacant given the data array
     *
     * @param  array $data
     * @return  App\Models\Vacant
     */
    public function Create($data) {
        // Validate that the data array is correct
        $this->ValidateDataAgainstModel($data);
        // Create the object
        $result = Vacant::create($data);
        return $result;
    }

    /**
     * Creates a Vacant given the data array
     *
     * @param  Vacant $item
     * @param  array $data
     * @return  App\Models\Vacant
     */
    public function Update(Vacant $item, $data) {
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
        $book = Vacant::ValidationBook();
        $validator = Validator::make($data,
            $book['rules'],
            $book['messages']);
        if ($validator->fails()) {
            $errors = $validator->errors();
            throw ValidationException::withMessages($errors->toArray());
        }
    }
}
