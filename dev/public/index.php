<?php

declare(strict_types=1);

use DI\ContainerBuilder;
use Slim\Factory\AppFactory;

require dirname(__DIR__) . '/vendor/autoload.php';

$containerBuilder = new ContainerBuilder();
(require dirname(__DIR__) . '/config/settings.php')($containerBuilder);
(require dirname(__DIR__) . '/config/dependencies.php')($containerBuilder);

$container = $containerBuilder->build();
AppFactory::setContainer($container);
$app = AppFactory::create();

$app->addBodyParsingMiddleware();
$app->addRoutingMiddleware();
$displayErrorDetails = (bool) $container->get('settings')['displayErrorDetails'];
$app->addErrorMiddleware($displayErrorDetails, true, true);

(require dirname(__DIR__) . '/config/routes.php')($app);

$app->run();
