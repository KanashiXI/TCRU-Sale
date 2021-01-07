<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\product;
class ProductController extends Controller
{
    public function getproduct()
    {
        $getall = product::all();
        return response()->json($getall,200); 
    }
}