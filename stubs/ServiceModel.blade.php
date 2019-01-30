@php
  echo "<?php
";
@endphp
namespace App\Services;

use Illuminate\Validation\ValidationException;
use Validator;

use App\Exceptions\{{ $name }}Exception;
use App\Models\{{ $modelName }};

class {{ $name }} {
    /**
     * Creates a {{ $modelName }} given the data array
     *
     * @param array $data
     * @return App\Models\{{ $modelName }}
     */
    public function Create($data) {
        // Validate that the data array is correct
        $this->ValidateDataAgainstModel($data);
        // Create the object
        $result = {{ $modelName }}::create($data);
        return $result;
    }

    /**
     * Creates a {{ $modelName }} given the data array
     *
     * @param {{ $modelName }} $item
     * @param array $data
     * @return App\Models\{{ $modelName }}
     */
    public function Update({{ $modelName }} $item, $data) {
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
     * @return void
     */
    public function ValidateDataAgainstModel($data) {
        $book = {{ $modelName }}::ValidationBook();
        $validator = Validator::make($data,
            $book['rules'],
            $book['messages']);
        if ($validator->fails()) {
            $errors = $validator->errors();
            throw ValidationException::withMessages($errors->toArray());
        }
    }
}
