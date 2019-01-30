<?php
namespace App\Jatapiaro\Utils;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\File;

class StubEngine {
    /**
     * Generates the output file based on the stub file
     *
     * @param string $stubFile
     * @param array $data
     * @param string $outputFile
     * @return void
     */
    public static function Generate($stubFile, $data, $outputFile) {
        // Get the stub location
        $stubBaseLocation = base_path().'/stubs/';
        $stubPath = "{$stubBaseLocation}{$stubFile}";
        // Use the view file engine
        $content = View::file($stubPath, $data)->render();
        // Generate the file
        File::put($outputFile, $content);
    }

    /**
     * Generates the model file
     *
     * @param string $modelName
     * @return string
     */
    public static function GenerateModel($modelName) {
        $stubFile = 'Model.blade.php';
        $outputFile = app_path().'/Models/'.$modelName.'.php';
        static::Generate($stubFile, [ 'name' => $modelName ], $outputFile);
        return $outputFile;
    }

    /**
     * Generates the exception file
     *
     * @param string $name
     * @return string
     */
    public static function GenerateException($name) {
        $stubFile = 'Exception.blade.php';
        $outputFile = app_path().'/Exceptions/'.$name.'Exception.php';
        static::Generate($stubFile, [ 'name' => $name ], $outputFile);
        return $outputFile;
    }

    /**
     * Generates the service provider file
     *
     * @param string $name
     * @return string
     */
    public static function GenerateServiceProvider($name) {
        $stubFile = 'ServiceProvider.blade.php';
        $outputFile = app_path().'/Providers/'.$name.'Provider.php';
        static::Generate($stubFile, [ 'name' => $name ], $outputFile);
        return $outputFile;
    }

    /**
     * Generates the facade file
     *
     * @param string $name
     * @return string
     */
    public static function GenerateFacade($name) {
        $stubFile = 'Facade.blade.php';
        $outputFile = app_path().'/Facades/'.$name.'Facade.php';
        static::Generate($stubFile, [ 'name' => $name ], $outputFile);
        return $outputFile;
    }

    /**
     * Generates the service file
     *
     * @param string $name
     * @return string
     */
    public static function GenerateService($name) {
        $stubFile = 'Service.blade.php';
        $outputFile = app_path().'/Services/'.$name.'.php';
        static::Generate($stubFile, [ 'name' => $name ], $outputFile);
        return $outputFile;
    }

    /**
     * Generates the service model
     *
     * @param string $name
     * @param string $modelName
     * @return void
     */
    public static function GenerateServiceModel($name, $modelName) {
        $stubFile = 'ServiceModel.blade.php';
        $outputFile = app_path().'/Services/'.$name.'.php';
        static::Generate($stubFile, [ 'name' => $name, 'modelName' => $modelName ], $outputFile);
        return $outputFile;
    }

}
