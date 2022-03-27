<?php

namespace App\Console\Commands\kot;

use Illuminate\Console\Command;

use App\Models\Product;

use GuzzleHttp\Client;
use Ramsey\Uuid\Type\Decimal;
use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Support\Facades\DB;

class GetDataRefrigerator extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-data-refrigerator-kot';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get data refrigerator Kotlass';

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
        $options = [
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36'
            ],
            'curl' => [CURLOPT_SSL_VERIFYPEER => false],
        ];

        $page = 5;
        $list_title = [];
        $list_link[] = [];
        for ($i = 1; $i <= $page; $i++) {
            $client = new Client($options);
            $response = $client->request('GET', 'https://www.techprom.ru/catalog/bytovaya_tekhnika_i_tovary_dlya_doma/krupnaya_bytovaya_tekhnika/morozilniki_i_kholodilniki/?arrFilter_P9_MIN=&arrFilter_P9_MAX=&arrFilter_9437=2526654546&stock=1&arrFilter_6524_MIN=&arrFilter_6524_MAX=&arrFilter_6578_MIN=&arrFilter_6578_MAX=&set_filter=%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C&PAGEN_1=' . $i)->getBody()->getContents();
            $crawler = new Crawler($response);
            $product_list = $crawler->filterXPath("//*[@class='product-card']");

            foreach ($product_list as $domElement) {
                $outerHTML = $domElement->ownerDocument->saveHTML($domElement);
                $crawler_block = new Crawler($outerHTML);
                $link = $crawler_block->filterXPath("//*[@class='name']")->attr('href');
                $img = $crawler_block->filterXPath("//*[@class='img fast-view']/a/img")->attr('data-src');

                if (!empty($list_link)) {
                    if (in_array($link, $list_link)) {
                        echo "Match found\n";
                        continue;
                    } else {
                        echo $crawler_block->filterXPath("//*[@class='price']")->text() . "\n";
                        $price = $crawler_block->filterXPath("//*[@class='price']")->text();

                        $model = Product::firstOrCreate(
                            ['link' => $link,],
                            [
                                'category_id' => 1,
                                'name' => $crawler_block->filterXPath("//*[@class='name']")->text(),
                                'link' => $link,
                                'city' => 'kot',
                                'thumbnail' => $img,
                                'slug' => '-',
                                'price' => (int)filter_var($price, FILTER_SANITIZE_NUMBER_INT),
                                'count_learn' => 0,
                            ]
                        );
                        $model->price = (int)filter_var($price, FILTER_SANITIZE_NUMBER_INT);
                        $model->save();
                        echo "Write\n";
                    }
                }

                $list_title[] = $crawler_block->filterXPath("//*[@class='name']")->text();
                $list_link[] = $link;
                $price = $crawler_block->filterXPath("//*[@class='price']")->text();
            }
        }

        //Исключить товары которых не оказалось при парсинге 
        $products = Product::where('category_id', 1)->where('city', 'kot')->get();
        foreach ($products as $item)
        {
            if (in_array($item->link, $list_link)) {
                $item->status = true;
                $item->save();
                echo "true\n";
            }
            else
            {
                $item->status = false;
                $item->save();
                echo "false\n";
            }
        }
    }
}
