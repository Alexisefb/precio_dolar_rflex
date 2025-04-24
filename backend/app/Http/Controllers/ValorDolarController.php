<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Valor_dolar;

class ValorDolarController extends Controller
{
    public function porRango(Request $request)
    {
        $request->validate([
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date|after_or_equal:fecha_inicio',
        ]);

        $valores = Valor_dolar::whereBetween('fecha', [$request->fecha_inicio, $request->fecha_fin])
            ->orderBy('fecha', 'asc')
            ->get();

        return response()->json($valores);
    }
}
