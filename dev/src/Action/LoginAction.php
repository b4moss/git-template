<?php

declare(strict_types=1);

namespace App\Action;

use App\Auth\SessionAuth;
use App\Auth\UserRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

final class LoginAction
{
    public function __construct(
        private readonly UserRepository $users,
        private readonly SessionAuth $auth,
    ) {
    }

    public function __invoke(Request $request, Response $response): Response
    {
        $body = (array) $request->getParsedBody();
        $email = isset($body['email']) && is_string($body['email']) ? trim($body['email']) : '';
        $password = isset($body['password']) && is_string($body['password']) ? $body['password'] : '';

        $user = $this->users->findByEmail($email);
        if ($user === null || !password_verify($password, $user['password_hash'])) {
            $response->getBody()->write(json_encode(['error' => 'invalid credentials'], JSON_THROW_ON_ERROR));

            return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
        }

        $this->auth->login($user['id']);
        $response->getBody()->write(json_encode([
            'id' => $user['id'],
            'email' => $user['email'],
        ], JSON_THROW_ON_ERROR));

        return $response->withHeader('Content-Type', 'application/json');
    }
}
