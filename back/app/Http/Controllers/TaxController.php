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
        $new->firstname = $request->input('firstname');
        $new->lastname = $request->input('lastname');
        
        $new->company_name = $request->input('company_name');
        $new->address = $request->input('address');
        $new->postal_code = $request->input('postal_code');
        $new->province_id = $request->input('province_id');
        $new->amphure_id = $request->input('amphure_id');
        $new->district_id = $request->input('district_id');
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

    public function editTax(Request $request, tax $tax)
    {       
        $edit = tax::where('tax_id', $request->tax_id)->first();
        $edit->firstname=$request->firstname;
        $edit->lastname=$request->lastname;
        $edit->company_name=$request->company_name;
        $edit->address=$request->address;
        $edit->postal_code=$request->postal_code;
        $edit->province_id=$request->province_id;
        $edit->amphure_id=$request->amphure_id;
        $edit->district_id=$request->district_id;
        $edit->telephone=$request->telephone;
        $edit->vat_identification_number=$request->vat_identification_number;
        $edit->user_id=$request->user_id;      
        $result = $edit->save();
    }

    public function getOneTax($request)
    {
        $getall = tax::where('tax_id', $request)->get();  
        return response()->json($getall,200); 
    }
}