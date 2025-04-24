<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Defina los comandos de consola para su aplicación.
     *
     * @var array
     */
    protected $commands = [
        \App\Console\Commands\ImportarDolares::class,
    ];

    /**
     * Defina las tareas programadas para su aplicación.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Ejecuta el comando cada hora
        $schedule->command('dolar:importar')->hourly();
    }

    /**
     * Registre los comandos de consola para la aplicación.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
