<?php

use Illuminate\Database\Seeder;

use App\Models\Employee;
use App\Models\Vacant;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(Employee::class, 3)->create();
        factory(Vacant::class, 3)->create();
    }
}
