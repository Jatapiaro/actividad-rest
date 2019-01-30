<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Traits\WithGetList;

class Vacant extends Model
{
    use SoftDeletes, WithGetList;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var  array
     */
    protected $dates = ['deleted_at'];

    protected $table = "vacancies";

    /**
     * The attributes that are mass assignable.
     *
     * @var  array
     */
    protected $fillable = [
        'benefits',
        'description',
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
            'benefits' => 'required|string',
            'description' => 'required|string',
            'name' => 'required|string',
            'salary' => 'required|numeric|between:1,99999999999999999999999999.9999'
        ];
        $data['messages'] = [
            'benefits.required' => 'Se requieren los beneficios de la vacante',
            'benefits.string' => 'Los beneficios de la vacante deben ser un texto',

            'description.required' => 'Se requiere la descripción de la vacante',
            'description.string' => 'La descripción de la vacante debe ser un texto',

            'name.required' => 'Se requiere el nombre de la vacante',
            'name.string' => 'El nombre de la vacante debe ser texto',

            'salary.required' => 'Se requiere el salario',
            'salary.numeric' => 'El salario debe ser un número',
            'salary.between' => 'El salario debe ser un número entre 1 y 99999999999999999999999999.9999'
        ];
        return $data;
    }
}
