<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Valor_dolar extends Model
{
    protected $table = 'valor_dolars';
    protected $fillable = ['fecha', 'valor'];
}
