<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Category;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {

    $salt = $faker->word;
    return [
        'name' => $salt,
        'slug' => Str::slug($salt),
    ];
});
