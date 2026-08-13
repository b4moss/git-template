<?php

declare(strict_types=1);

use App\Action\HealthAction;
use App\Action\HelloAction;
use Slim\App;

return static function (App $app): void {
    $app->get('/healthz', HealthAction::class);
    $app->get('/hello', HelloAction::class);
};
