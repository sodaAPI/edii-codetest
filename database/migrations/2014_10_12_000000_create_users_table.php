<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('posisi')->nullable();
            $table->string('noktp')->nullable();
            $table->string('tempattanggallahir')->nullable();
            $table->string('jeniskelamin')->nullable();
            $table->string('agama')->nullable();
            $table->string('goldarah')->nullable();
            $table->string('status')->nullable();
            $table->string('alamatktp')->nullable();
            $table->string('alamattinggal')->nullable();
            $table->string('notelp')->nullable();
            $table->string('huborangterdekat')->nullable();
            $table->string('skill')->nullable();
            $table->string('bersediaditempatkan')->nullable();
            $table->string('penghasilandiharap')->nullable();
            $table->string('pendidikanterakhir')->nullable();
            $table->string('riwayatpelatihan')->nullable();
            $table->string('riwayatpekerjaan')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
