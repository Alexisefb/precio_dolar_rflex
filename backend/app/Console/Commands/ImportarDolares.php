<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Valor_dolar;
use Carbon\Carbon;

class ImportarDolares extends Command
{
    protected $signature = 'dolar:importar';
    protected $description = 'Importo valores del dólar de año 2024 y 2025';

    public function handle()
    {
        foreach ([2024, 2025] as $anio) {
            $response = Http::get("https://mindicador.cl/api/dolar/{$anio}");

            if (!$response->ok()) {
                $this->error("Error al obtener datos del año {$anio}");
                continue;
            }

            $data = $response->json()['serie'] ?? [];

            foreach ($data as $item) {
                $fecha = Carbon::parse($item['fecha'])->format('Y-m-d');
                $valor = $item['valor'];

                Valor_dolar::updateOrCreate(
                    ['fecha' => $fecha],
                    ['valor' => $valor]
                );
            }

            $this->info("Datos del año {$anio} importados exitosamente.");
        }
    }
}
