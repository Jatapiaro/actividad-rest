<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Employee::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'salary' => $this->faker->randomNumber($nbDigits = 4, $strict = false)
    ];
});
