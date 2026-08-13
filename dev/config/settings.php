<?php

declare(strict_types=1);

use DI\ContainerBuilder;

return static function (ContainerBuilder $builder): void {
    $root = dirname(__DIR__);
    $builder->addDefinitions([
        'settings' => [
            'displayErrorDetails' => (getenv('APP_DEBUG') ?: '1') === '1',
            'appName' => getenv('APP_NAME') ?: 'slim-auth-app',
            'dbPath' => getenv('DB_PATH') ?: ($root . '/var/data/app.sqlite'),
            'mailDsn' => getenv('MAIL_DSN') ?: 'null://null',
            'mailFrom' => getenv('MAIL_FROM') ?: 'noreply@example.com',
        ],
    ]);
};
