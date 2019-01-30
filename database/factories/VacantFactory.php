<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Vacant::class, function (Faker $faker) {
    return [
        'name' => $this->faker->name,
        'description' => $this->faker->text,
        'salary' => $this->faker->randomNumber($nbDigits = 4, $strict = false),
        'benefits' => $this->faker->text
    ];
});
