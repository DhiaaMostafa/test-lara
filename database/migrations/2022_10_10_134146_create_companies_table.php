<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {    Schema::enableForeignKeyConstraints();
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            // $table->integer('idbusiness')->unsigned();
            $table->text('description');
            $table->string('img');
            $table->string('urlCompany');

            $table->unsignedBigInteger('idBusn');
         //   $table->foreign('idBusn')->references('id')->on('businesses');
          
          //  $table->foreign('IdBusiness')->references('id')->on('businesses');
           // $table->foreign('idbusiness')->references('id')->on('businesses');
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
        Schema::dropIfExists('companies');
    }
}
