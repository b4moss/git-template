<?php

declare(strict_types=1);

namespace App\Action;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

final class HelloAction
{
    public function __invoke(Request $request, Response $response): Response
    {
        $params = $request->getQueryParams();
        $name = isset($params['name']) && is_string($params['name']) && $params['name'] !== ''
            ? $params['name']
            : 'world';

        $payload = json_encode(['message' => 'Hello, ' . $name . '!'], JSON_THROW_ON_ERROR);
        $response->getBody()->write($payload);

        return $response->withHeader('Content-Type', 'application/json');
    }
}
