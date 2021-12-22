<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Category;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        $model = Category::create([
            'name' => $request->name_category,
        ]);
        return response([
            'status' => true,
        ], 200);
    }
}
