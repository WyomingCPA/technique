<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

use App\Models\Product;
use App\Models\Statistics;
class GetStatistics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-statistics';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get Data every day from bd';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $total_all_product = Product::all()->count();
        $count_available_product = Product::where('status', true)->where('city', 'kor')->orderBy('price', 'desc')->get()->count();
        $user = User::select('id')->where('email', 'WyomingCPA@yandex.ru')->first();
        $total_favorite_product = $user->favoritesProduct()->where('status', true)->get()->count();
        $count_all_research_product = Product::where('status', true)->where('city', 'kor')->orderBy('price', 'desc')->get()->sum('count_learn');
        echo $count_all_research_product . "\n";

        return 0;
    }
}
