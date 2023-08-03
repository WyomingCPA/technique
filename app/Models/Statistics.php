<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistics extends Model
{
    use HasFactory;

    protected $fillable = [
        'total_all_product',
        'total_favorite_product',
        'count_all_research_product',
        'count_available_product',
    ];
}
