<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;
use Illuminate\Support\Facades\Auth;
class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $total_all_product_count = Product::all()->count();
        $all_active_product_count = Product::where('status', true)->where('city', 'kor')->orderBy('price', 'desc')->get()->count();
        $all_favorite_product_count = Auth::user()->favoritesProduct()->where('status', true)->get()->count();
        return response([
            'total_all_product_count' => $total_all_product_count,
            'all_active_product_count' => $all_active_product_count,
            'all_favorite_product_count' => $all_favorite_product_count,
        ], 200);
    }
}
