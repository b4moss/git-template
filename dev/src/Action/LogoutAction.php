<?php

declare(strict_types=1);

namespace App\Action;

use App\Auth\SessionAuth;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

final class LogoutAction
{
    public function __construct(private readonly SessionAuth $auth)
    {
    }

    public function __invoke(Request $request, Response $response): Response
    {
        $this->auth->logout();
        $response->getBody()->write(json_encode(['ok' => true], JSON_THROW_ON_ERROR));

        return $response->withHeader('Content-Type', 'application/json');
    }
}
