<?php
namespace App\Traits;

trait WithGetList
{
    /**
     * Returns the paginated list of resources
     *
     * @return \Illuminate\Pagination\Paginator
     **/
    public static function getList()
    {
        return static::paginate(100);
    }
}
