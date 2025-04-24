<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ValorDolarController;

Route::get('/dolar/rango', [ValorDolarController::class, 'porRango']);