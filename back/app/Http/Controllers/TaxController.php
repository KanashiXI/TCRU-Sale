<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tax;

class TaxController extends Controller
{
    public function gettaxById($request)
    {       
        $getall = tax::where('user_id', $request)->get();  
        return response()->json($getall,200); 
    }

    public function createTax(Request $request)
    {       
        $new = new tax;
        $new->company_name = $request->input('company_name');
        $new->address = $request->input('address');
        $new->postal_code = $request->input('postal_code');
        $new->district = $request->input('district');
        $new->telephone = $request->input('telephone');
        $new->vat_identification_number = $request->input('vat_identification_number');       
        $new->user_id = $request->input('user_id');       
        $new->save();

        return response()->json(['newitem'=>$new],201);
    }

    public function deleteTax($request)
    {       
        $tax = tax::where('tax_id', $request);
            if($tax)
                $tax->delete(); 
            else
            return response()->json(['tax not found']);
        return response()->json(['deleted']); 
    }
}