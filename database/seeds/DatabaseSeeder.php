<?php

use App\Model\Category;
use App\Model\Likes;
use App\Model\Question;
use App\Model\Reply;
use Illuminate\Database\Seeder;
use App\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(User::class, 10)->create();
        factory(Category::class, 5)->create();
        factory(Question::class, 10)->create();
        factory(Reply::class, 50)->create()->each(function($reply)
        {
           return $reply->like()->save(factory(Likes::class)->make());
        });
    }
}
