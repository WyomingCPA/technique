<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Category;
use App\Models\MinLimitProduct;

class CategoryController extends Controller
{
    public function index(Request $request)
    {   
        //$test = Category::find(8)->count_access_product;    
        return response([
            'status' => true,
            'category' => Category::with('limit')->get()->toArray(),
        ], 200);
    }

    public function setLimit(Request $request)
    {
        $id_check = $request->id_check;
        $set_limit = $request->set_limit;
        $model = MinLimitProduct::updateOrCreate(['category_id' => $id_check,], ['category_id' => $id_check, 'count' => (int)$set_limit,]);
        
        return response([
            'status' => true,
        ], 200);
    }

    public function store(Request $request)
    {
        $model = Category::create([
            'id' => (int)$request->idCategory,
            'name' => $request->nameCategory,
        ]);
        return response([
            'status' => true,
        ], 200);
    }
}
