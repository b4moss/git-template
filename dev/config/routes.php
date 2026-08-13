<?php

declare(strict_types=1);

use App\Action\HealthAction;
use App\Action\HelloAction;
use App\Action\LoginAction;
use App\Action\LogoutAction;
use App\Action\MeAction;
use App\Action\RegisterAction;
use Slim\App;

return static function (App $app): void {
    $app->get('/healthz', HealthAction::class);
    $app->get('/hello', HelloAction::class);

    $app->post('/register', RegisterAction::class);
    $app->post('/login', LoginAction::class);
    $app->post('/logout', LogoutAction::class);
    $app->get('/me', MeAction::class);
};
