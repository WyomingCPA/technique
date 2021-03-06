<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('category');
            $table->string('name');
            $table->string('link');
            $table->string('thumbnail')->nullable();
            $table->string('city')->nullable();
            $table->string('slug');
            $table->text('description')->nullable();
            $table->decimal('price', 8, 2)->nullable();
            $table->boolean('status')->default(1);
            $table->integer('count_learn');
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
        Schema::dropIfExists('products');
    }
}
