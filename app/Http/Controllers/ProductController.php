<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use Illuminate\Support\Facades\Auth;

use App\Models\Product;

class ProductController extends Controller
{
    public function refrigeratorKot(Request $reqeust)
    {
        return response([
            'products' => Product::where('status', true)->where('category_id', '=', 1)->where('city', 'kot')->get(),
        ], 200);
    }
    public function washmasineKot(Request $reqeust)
    {
        return response([
            'products' => Product::where('status', true)->where('category_id', '=', 2)->where('city', 'kot')->get(),
        ], 200);
    }

    public function index(Request $request)
    {
        $products = Product::where('status', true)->where('category_id', '=', 1)->where('city', 'kor')->get();
        $list_price = $products->pluck('price');
        $price = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }
        $result_price = array_count_values($price);
        return response([
            'products' => $products,
            'price' => $result_price,
        ], 200);
    }

    public function tv32(Request $request)
    {
        $products = Product::where('status', true)->where('category_id', '=', 6)->where('city', 'kor')->get();
        $list_price = $products->pluck('price');
        $price = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }

        $result_price = array_count_values($price);
        return response([
            'products' => $products,
            'price' => $result_price,
        ], 200);
    }

    public function tv40(Request $request)
    {
        $products = Product::where('status', true)->where('category_id', '=', 4)->where('city', 'kor')->get();
        $list_price = $products->pluck('price');
        $price = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }

        $result_price = array_count_values($price);
        return response([
            'products' => $products,
            'price' => $result_price,
        ], 200);
    }

    public function tv50(Request $request)
    {
        $products = Product::where('status', true)->where('category_id', '=', 5)->where('city', 'kor')->get();
        $list_price = $products->pluck('price');
        $price = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }
        $result_price = array_count_values($price);
        return response([
            'products' => $products,
            'price' => $result_price,
        ], 200);
    }

    public function washmashine(Request $request)
    {
        $priceMin = (int)$request->get('priceMin');
        $priceMax = (int)$request->get('priceMax');

        $object = Product::where('status', true)->where('category_id', '=', 2)->where('city', 'kor');

        if ($priceMin !== null || $priceMax !== null) {

            $object = $object->where('price', '>=', $priceMin);
            $object = $object->where('price', '<=', $priceMax);
        }

        $products_filter = $object->get();

        $product = Product::where('status', true)->where('category_id', '=', 2)->where('city', 'kor')->get();
        $list_price = $product->pluck('price');
        $list_name = $products_filter->pluck('name');

        $price = [];
        $params = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }

        $re = "~[\<](.*)[\>]~";
        $params_raw = [];
        foreach ($list_name as $item) {
            preg_match_all($re, $item, $matches);
            $raw_string = $matches[1][0] ?? 0;
            $params_raw = explode("/", $raw_string);
            foreach ($params_raw as $value) {
                $params[] = $value;
            }
        }

        $result_price = array_count_values($price);
        $result_params = array_count_values($params);

        return response([
            'products' => $products_filter,
            'price' => $result_price,
            'params' => $result_params,
            'priceMin' => $priceMin,
            'priceMax' => $priceMax,
        ], 200);
    }

    public function smart(Request $request)
    {
        $priceMin = (int)$request->get('priceMin');
        $priceMax = (int)$request->get('priceMax');
        $object = Product::where('status', true)->where('category_id', '=', 7)->where('city', 'kor');

        if ($priceMin !== null || $priceMax !== null) {

            $object = $object->where('price', '>=', $priceMin);
            $object = $object->where('price', '<=', $priceMax);
        }

        $products_filter = $object->get();

        $product = Product::where('status', true)->where('category_id', '=', 7)->where('city', 'kor')->get();
        $list_price = $product->pluck('price');
        $list_name = $products_filter->pluck('name');
        $price = [];
        $params = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }

        $re = "~[\<](.*)[\>]~";
        $params_raw = [];
        foreach ($list_name as $item) {
            preg_match_all($re, $item, $matches);
            $raw_string = $matches[1][0] ?? 0;
            $params_raw = explode("/", $raw_string);
            foreach ($params_raw as $value) {
                $params[] = $value;
            }
        }

        $result_price = array_count_values($price);
        $result_params = array_count_values($params);

        return response([
            'products' => $products_filter,
            'price' => $result_price,
            'params' => $result_params,
            'priceMin' => $priceMin,
            'priceMax' => $priceMax,
        ], 200);
    }

    public function laptop(Request $request)
    {
        $priceMin = (int)$request->get('priceMin');
        $priceMax = (int)$request->get('priceMax');

        $object = Product::where('status', true)->where('category_id', '=', 8)->where('city', 'kor');
        if ($priceMin !== null || $priceMax !== null) {

            $object = $object->where('price', '>=', $priceMin);
            $object = $object->where('price', '<=', $priceMax);
        }

        $products_filter = $object->get();
        $product = Product::where('status', true)->where('category_id', '=', 8)->where('city', 'kor')->get();
        $list_price = $product->pluck('price');
        $list_name = $products_filter->pluck('name');
        $price = [];
        $params = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }
        $re = "~[\<](.*)[\>]~";
        $params_raw = [];
        foreach ($list_name as $item) {
            preg_match_all($re, $item, $matches);
            $raw_string = $matches[1][0] ?? 0;
            $params_raw = explode("/", $raw_string);
            foreach ($params_raw as $value) {
                $params[] = $value;
            }
        }

        $result_price = array_count_values($price);
        $result_params = array_count_values($params);

        return response([
            'products' => $products_filter,
            'price' => $result_price,
            'params' => $result_params,
            'priceMin' => $priceMin,
            'priceMax' => $priceMax,
        ], 200);
    }

    public function vacuum(Request $request)
    {
        $products = Product::where('status', true)->where('category_id', '=', 9)->where('city', 'kor')->get();
        $list_price = $products->pluck('price');
        $list_name = $products->pluck('name');
        $price = [];
        $params = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }
        $re = "~[\<](.*)[\>]~";
        $params_raw = [];
        foreach ($list_name as $item) {
            preg_match_all($re, $item, $matches);
            $raw_string = $matches[1][0] ?? 0;
            $params_raw = explode("/", $raw_string);
            foreach ($params_raw as $value) {
                $params[] = $value;
            }
        }

        $result_price = array_count_values($price);
        $result_params = array_count_values($params);

        return response([
            'products' => $products,
            'price' => $result_price,
            'params' => $result_params,
        ], 200);
    }

    public function robotVacum(Request $request)
    {
        $products = Product::where('status', true)->where('category_id', '=', 10)->where('city', 'kor')->get();
        $list_price = $products->pluck('price');
        $list_name = $products->pluck('name');
        $price = [];
        $params = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }
        $re = "~[\<](.*)[\>]~";
        $params_raw = [];
        foreach ($list_name as $item) {
            preg_match_all($re, $item, $matches);
            $raw_string = $matches[1][0] ?? 0;
            $params_raw = explode("/", $raw_string);
            foreach ($params_raw as $value) {
                $params[] = $value;
            }
        }

        $result_price = array_count_values($price);
        $result_params = array_count_values($params);

        return response([
            'products' => $products,
            'price' => $result_price,
            'params' => $result_params,
        ], 200);
    }
    public function sales(Request $request)
    {
        $products = Product::where('status', false)->where('updated_at', '>=', Carbon::now()->subDays(7)->startOfDay())
            ->where('city', 'kor')
            ->orderBy('updated_at', 'desc')->get();

        $list_price = $products->pluck('price');
        $price = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }

        $result_price = array_count_values($price);
        return response([
            'products' => $products,
            'price' => $result_price,
        ], 200);
    }

    public function changes(Request $request)
    {
        $products = Product::where('status', true)->where('updated_at', '>=', Carbon::now()->subDays(7)->startOfDay())
            ->where('city', 'kor')
            ->orderBy('updated_at', 'desc')->get();

        $list_price = $products->pluck('price');
        $price = [];
        foreach ($list_price as $item) {
            $price[] = (int) $item;
        }

        $result_price = array_count_values($price);
        return response([
            'products' => $products,
            'price' => $result_price,
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

    public function favorite(Request $request)
    {
        $models = Auth::user()->favoritesProduct()->where('status', true)->get();
        return response([
            'products' => $models,
        ], 200);
    }
    public function setFavorite(Request $request)
    {
        $isFavorite = $request->is_favorite;
        if ($isFavorite) {
            Auth::user()->favoritesProduct()->attach($request->id_product);
        } else {
            Auth::user()->favoritesProduct()->detach($request->id_product);
        }

        return response([
            'status' => true,
        ], 200);
    }
    public function edit(Request $request, $id)
    {
        return response([
            'product' => Product::findOrFail($id),
        ], 200);
    }
    public function update(Request $request)
    {
        $product = Product::findOrFail($request->id);
        $product->update([

            'description' => $request->description,
        ]);

        return response([
            'status' => true,
        ], 200);
    }

    public function saveParceProduct(Request $request)
    {
        $data = json_decode($request->post()[0], true);
        $category_id = 0;
        foreach ($data as $item) {
            //$test = $item["figi"];
            $model = Product::firstOrCreate(
                ['link' => $item["link"],],
                [
                    'category_id' => $item["category_id"],
                    'name' => $item["name"],
                    'link' => $item["link"],
                    'city' => $item["city"],
                    'slug' => '-',
                    'price' => (int)filter_var($item["price"], FILTER_SANITIZE_NUMBER_INT),
                    'count_learn' => 0,
                ]
            );
            $model->price = (int)filter_var($item["price"], FILTER_SANITIZE_NUMBER_INT);
            $model->save();
            $list_link[] = $item["link"];
            $category_id = $item["category_id"];
        }
        //Исключить товары которых не оказалось при парсинге 
        $products = Product::where('category_id', $category_id)->where('city', 'kor')->get();
        foreach ($products as $item) {
            if (in_array($item->link, $list_link)) {
                $item->status = true;
                $item->save();
                echo "true\n";
            } else {
                $item->status = false;
                $item->save();
                echo "false\n";
            }
        }
        return response([
            'status' => true,
        ], 200);
    }
}
