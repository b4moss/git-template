<?php

declare(strict_types=1);

use DI\ContainerBuilder;

return static function (ContainerBuilder $builder): void {
    $builder->addDefinitions([
        'settings' => [
            'displayErrorDetails' => (getenv('APP_DEBUG') ?: '1') === '1',
            'appName' => getenv('APP_NAME') ?: 'slim-app',
        ],
    ]);
};
