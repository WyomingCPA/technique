<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\Product;
use App\Models\Statistics;
use Illuminate\Support\Facades\Auth;
class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $total_all_product_count = Product::all()->count();
        $all_active_product_count = Product::where('status', true)->where('city', 'kor')->orderBy('price', 'desc')->get()->count();
        $all_favorite_product_count = Auth::user()->favoritesProduct()->where('status', true)->get()->count();
        $count_all_research_product = Product::where('status', true)->where('city', 'kor')->orderBy('price', 'desc')->get()->sum('count_learn');

        $date = Carbon::now()->subDays(7);
        $statistics = Statistics::where('created_at', '>=', $date)->orderBy('created_at', 'desc')->get();
        return response([
            'total_all_product_count' => $total_all_product_count,
            'all_active_product_count' => $all_active_product_count,
            'all_favorite_product_count' => $all_favorite_product_count,
            'count_all_research_product' => $count_all_research_product,
            'statistics' => $statistics,
        ], 200);
    }
}
