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
    
    Route::get('/emailvailate/{email}','RegisterController@getCustomerByEmail'); 
    Route::get('/profile', 'AuthController@userProfile');


    Route::get('/register','RegisterController@getcustomer'); //get data
    Route::get('/register/{username}','RegisterController@getCustomerByUsername'); 
    Route::post('/register','RegisterController@createcustomer'); //create data
    Route::get('/product','ProductController@getproduct'); //get data

});

// Route::group([
//     'middleware' => 'api',
//     'prefix' => 'shop'
// ], function () {

// });