<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\Models\Product;

class ProductController extends Controller
{
    public function refrigeratorKot(Request $reqeust)
    {
        return response([
            'products' => Product::where('status', true)->where('category_id', '=', 1)->where('city', 'kot')->get(),
        ], 200);
    }

    public function index(Request $request)
    {
        return response([
            'products' => Product::where('status', true)->where('category_id', '=', 1)->where('city', 'kor')->get(),
        ], 200);
    }
    
    public function washmashine(Request $request)
    {
        return response([
            'products' => Product::where('status', true)->where('category_id', '=', 2)->where('city', 'kor')->get(),
        ], 200);
    }

    public function tv32(Request $request)
    {
        return response([
            'products' => Product::where('status', true)->where('category_id', '=', 6)->where('city', 'kor')->get(),
        ], 200);
    }

    public function tv40(Request $request)
    {
        return response([
            'products' => Product::where('status', true)->where('category_id', '=', 4)->where('city', 'kor')->get(),
        ], 200);
    }

    public function tv50(Request $request)
    {
        return response([
            'products' => Product::where('status', true)->where('category_id', '=', 5)->where('city', 'kor')->get(),
        ], 200);
    }
    public function learn(Request $request)
    {
        echo $request->id_product;
        Product::where('id', $request->id_product)
            ->update([
                'count_learn' => DB::raw('count_learn+1'),
            ]);
        return response([
            'status' => true,
        ], 200);
    }
}
