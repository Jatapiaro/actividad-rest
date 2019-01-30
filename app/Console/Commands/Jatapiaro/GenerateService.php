<?php

namespace App\Console\Commands\Jatapiaro;

use Illuminate\Console\Command;

use JatapiaroService;

class GenerateService extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jatapiaro:generate:service
                            {name : The name of the service (e.g.: BuyerService ) }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates a new service given the Jatapiaro Stubs';

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
        if ($this->confirm("Are you sure you want to generate the service {$modelName}?")) {
            $results = JatapiaroService::GenerateService($modelName);
            foreach ($results as $result) {
                $this->info("{$modelName} stored in: {$result}");
            }
            $this->info('Now modify you config/app.php file');
            $this->info("Add the class inside {$results['Service Provider']} to your 'providers' array");
            $this->info("Add the class inside {$results['Service']} to your 'alias' array");
        }
    }
}
