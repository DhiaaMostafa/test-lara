<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Education\EductionController;



// Route::get('/storeuser', function () {
//     return 'lllllllllllllll';
// })->name('items');





Route::namespace('Education')->group(function(){
    Route::get('additems', 'EductionController@create')->name('additems');
    Route::post('storeitems', 'EductionController@store')->name('storeitems');

});

Route::namespace('User')->group(function(){
    Route::get('register', 'Usercontroller@create')->name('register');
 //   Route::get('profile', 'Usercontroller@profile')->name('profile');
   Route::post('register/storeuser', 'Usercontroller@store')->name('register.storeuser');
});

