<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('productos', function (Blueprint $table) {
            $table->foreign('tipoPescado_id')->references('id')->on('tipos_pescado')->onDelete('cascade');
            $table->foreign('formatoVenta_id')->references('id')->on('formatos_ventas')->onDelete('cascade');
            $table->foreign('escamado_id')->references('id')->on('tipos_escamado')->onDelete('cascade');
            $table->foreign('pais_id')->references('id')->on('paises')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('productos', function (Blueprint $table) {
            //
        });
    }
}
