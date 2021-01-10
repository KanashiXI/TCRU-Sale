<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\address;

class AddressController extends Controller
{
    public function getUserShippingAddress($request)
    {
        $getall = address::where('address_id', $request)->get();  
        return response()->json($getall,200); 
    }

    public function createShippingAddress(Request $request)
    {       
        $new = new address;
        $new->address = $request->input('address');
        $new->user_id = $request->input('user_id');
        $new->amphures_id = $request->input('amphures_id');
        $new->districts_id = $request->input('districts_id');
        $new->postal_code = $request->input('postal_code');
        $new->province_id = $request->input('province_id');
        $new->geographic_id = $request->input('geographic_id');
        $new->status = $request->input('status');            
        $new->save();
        return response()->json(['newitem'=>$new],201);
    }
    
}