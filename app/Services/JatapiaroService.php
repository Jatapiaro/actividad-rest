<?php
namespace App\Services;

use Illuminate\Support\Facades\Mail;

use App\Exceptions\JatapiaroServiceException;

use App\Jatapiaro\Utils\StubEngine;

class JatapiaroService {
    /**
     * Generates the model file
     *
     * @param string name
     * @return string
     */
    public function GenerateModel($name) {
        $result = StubEngine::GenerateModel($name);
        return $result;
    }

    /**
     * Generates the services file with the given name
     *
     * @param string $name
     * @return array
     */
    public function GenerateService($name) {
        $result['Exception'] = StubEngine::GenerateException($name);
        $result['Service Provider'] = StubEngine::GenerateServiceProvider($name);
        $result['Service Facade'] = StubEngine::GenerateFacade($name);
        $result['Service'] = StubEngine::GenerateService($name);
        return $result;
    }

    /**
     * Generates the service model file
     *
     * @param string $name
     * @return array
     */
    public function GenerateServiceModel($serviceModel, $modelName) {
        $result['Exception'] = StubEngine::GenerateException($serviceModel);
        $result['Service Provider'] = StubEngine::GenerateServiceProvider($serviceModel);
        $result['Service Facade'] = StubEngine::GenerateFacade($serviceModel);
        $result['Service'] = StubEngine::GenerateServiceModel($serviceModel, $modelName);
        return $result;
    }
}
