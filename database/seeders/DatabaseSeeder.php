<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    \App\Models\User::factory(100)->create();

    (new \App\Models\User([
      'name' => 'Admin Admin',
      'email' => 'admin@example.com',
      'password' => Hash::make('adminadmin'),
      'admin' => true
    ]))->save();
  }
}
