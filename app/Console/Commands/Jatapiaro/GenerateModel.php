<?php

namespace App\Console\Commands\Jatapiaro;

use Illuminate\Console\Command;

use JatapiaroService;

class GenerateModel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jatapiaro:generate:model
                            {name : The name of the model }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates a new model given the Jatapiaro Stubs';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $modelName = $this->argument('name');
        $modelName = camel_case($modelName);
        $modelName = ucfirst($modelName);
        if ($this->confirm("Are you sure you want to generate {$modelName}?")) {
            $result = JatapiaroService::GenerateModel($modelName);
            $this->info("{$modelName} stored in: {$result}");
        }
    }
}
