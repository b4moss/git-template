<?php

declare(strict_types=1);

namespace App\Action;

use App\Auth\SessionAuth;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

final class MeAction
{
    public function __construct(private readonly SessionAuth $auth)
    {
    }

    public function __invoke(Request $request, Response $response): Response
    {
        $user = $this->auth->currentUser();
        if ($user === null) {
            $response->getBody()->write(json_encode(['error' => 'unauthenticated'], JSON_THROW_ON_ERROR));

            return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
        }

        $response->getBody()->write(json_encode($user, JSON_THROW_ON_ERROR));

        return $response->withHeader('Content-Type', 'application/json');
    }
}
