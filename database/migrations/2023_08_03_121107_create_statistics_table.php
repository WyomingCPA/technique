<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatisticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statistics', function (Blueprint $table) {
            $table->id();
            $table->integer("total_all_product");//Всего продуктов в БД
            $table->integer("total_favorite_product");//Кол-во избранных доступных продуктов
            $table->integer("count_all_research_product");//Общее кол-во повторов доступных продуктов
            $table->integer("count_available_product");//Количество доступных продуктов
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
        Schema::dropIfExists('statistics');
    }
}
