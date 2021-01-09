<?php
Route::group([
    'middleware' => 'api',
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
    
    Route::get('emailvailate/{email}','RegisterController@getCustomerByEmail'); 
    // Route::post('emailvailate','RegisterController@getCustomerByEmail2'); 
    Route::post('editprofile','EditprofileController@editprofile');


    Route::get('/profile', 'AuthController@userProfile'); 
    Route::get('/product','ProductController@getproduct'); //get data
    Route::get('register','RegisterController@getcustomer'); //get data
    Route::get('/register/{username}','RegisterController@getCustomerByUsername'); 



    Route::post('/register','RegisterController@createcustomer'); //create data


    Route::post('tax','TaxController@createTax'); //เพิ่มข้อมูลใบกำกับภาษี
    Route::get('tax/{userId}', 'TaxController@gettaxById'); //ค้นหาใบกำกับภาษีด้วยไอดีผู้ใช้
    Route::delete('tax/{taxId}', 'TaxController@deleteTax'); //ค้นหาใบกำกับภาษีด้วยไอดีผู้ใช้



});


// Route::group([
//     'middleware' => 'api',
//     'prefix' => 'shop'
// ], function () {

// });