<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->decimal('precio', 8, 2);
            $table->decimal('porPeso', 8, 3);
            $table->unsignedBigInteger('tipoPescado_id');
            $table->unsignedBigInteger('formatoVenta_id');
            $table->unsignedBigInteger('escamado_id');
            $table->unsignedBigInteger('pais_id');
            $table->string('imagen')->nullable();
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
        Schema::dropIfExists('productos');
    }
}
