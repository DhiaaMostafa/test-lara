<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobActivesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_actives', function (Blueprint $table) {

            $table->increments('id'); 
            $table->integer('idProfile')->unsigned(); 
            $table->integer('idjobpost')->unsigned(); 
            $table->date('applyDate');
            $table->boolean('active');
            $table->foreign('idProfile')->references('id')->on('profiles');
            $table->foreign('idjobpost')->references('id')->on('job_posts');
          
            
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
        Schema::dropIfExists('job_actives');
    }
}
