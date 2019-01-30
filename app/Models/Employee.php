<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Traits\WithGetList;

class Employee extends Model
{
    use SoftDeletes, WithGetList;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var  array
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var  array
     */
    protected $fillable = [
        'name',
        'salary'
    ];

    /**
     * Returns an array that contains two indexes:
     * 'rules' for the validation
     * 'messages' messages given by the validation
     *
     * @return  array
     **/
    public static function ValidationBook()
    {
        $data = [];
        $data['rules'] = [
            'name' => 'required|string',
            'salary' => 'required|numeric|between:1,99999999999999999999999999.9999'
        ];
        $data['messages'] = [
            'name.required' => 'Se requiere el nombre del empleado',
            'name.string' => 'El nombre del empleado debe ser texto',

            'salary.required' => 'Se requiere el salario del empleado',
            'salary.numeric' => 'El salario debe ser un número',
            'salary.between' => 'El salario debe ser un número entre 1 y 99999999999999999999999999.9999'
        ];
        return $data;
    }
}
