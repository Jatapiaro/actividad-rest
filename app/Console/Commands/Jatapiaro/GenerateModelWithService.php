<?php

namespace App\Console\Commands\Jatapiaro;

use Illuminate\Console\Command;

use JatapiaroService;

class GenerateModelWithService extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jatapiaro:generate:model-with-service
                            {name : The name of the model }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates a new model and the service given the Jatapiaro Stubs';

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
        $serviceName = "{$modelName}Service";
        if ($this->confirm("Are you sure you want to generate {$modelName} with the services?")) {
            $result = JatapiaroService::GenerateModel($modelName);
            $this->info("{$modelName} stored in: {$result}");
            $this->info("Generating {$serviceName}...");
            $results = JatapiaroService::GenerateServiceModel($serviceName, $modelName);
            foreach ($results as $result) {
                $this->info("{$serviceName} stored in: {$result}");
            }
            $this->info('Now modify you config/app.php file');
            $this->info("Add the class inside {$results['Service Provider']} to your 'providers' array");
            $this->info("Add the class inside {$results['Service']} to your 'alias' array");
        }
    }
}
