<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_posts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('idUser')->unsigned();

            $table->unsignedInteger('idJobtype');
           // $table->foreign('idJobtype')->references('id')->on('job_skills');

           // $table->integer('idJobtype')->unsigned();
            $table->integer('idCompany')->unsigned();
            $table->integer('idlocation')->unsigned();
            $table->date('CreateDate');
            $table->char('is_active');
            $table->string('description');
            $table->foreign('idUser')->references('id')->on('users_pers');
         //   $table->foreign('idJobtype')->references('id')->on('job_skills');
            $table->foreign('idCompany')->references('id')->on('companies');
          //~  $table->foreign('idlocation')->references('id')->on('job_locations');
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
        Schema::dropIfExists('job_posts');
    }
}
