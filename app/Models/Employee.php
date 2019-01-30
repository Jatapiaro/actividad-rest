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
        //
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
            //
        ];
        $data['messages'] = [
            //
        ];
        return $data;
    }
}
