<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMusicTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('music_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('music_id')->unique()->nullable();
            $table->string('title')->nullable();
            $table->string('artist')->nullable();
            $table->string('genre')->nullable();
            $table->string('album')->nullable();
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
        Schema::dropIfExists('music_tbl');
    }
}
