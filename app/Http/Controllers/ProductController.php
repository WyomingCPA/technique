<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\Models\Product;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'products' => Product::where('status', true)->get(),
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
