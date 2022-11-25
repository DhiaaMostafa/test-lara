<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersPersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_pers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('idType')->unsigned(); 
            $table->date('dateBrith');
            $table->string('gender');
            $table->string('email')->unique();
            $table->string('password');
            $table->char('isActive');
            $table->integer('phone');
            $table->foreign('idType')->references('id')->on('user_types');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_pers');
    }
}
