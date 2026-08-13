<?php

declare(strict_types=1);

namespace App\Action;

use App\Auth\SessionAuth;
use App\Auth\UserRepository;
use App\Mail\MailAdapter;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use RuntimeException;
use Throwable;

final class RegisterAction
{
    public function __construct(
        private readonly UserRepository $users,
        private readonly SessionAuth $auth,
        private readonly MailAdapter $mail,
    ) {
    }

    public function __invoke(Request $request, Response $response): Response
    {
        $body = (array) $request->getParsedBody();
        $email = isset($body['email']) && is_string($body['email']) ? trim($body['email']) : '';
        $password = isset($body['password']) && is_string($body['password']) ? $body['password'] : '';

        if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 8) {
            return $this->json($response, ['error' => 'invalid email or password (min 8)'], 422);
        }

        try {
            $user = $this->users->create($email, $password);
            $this->auth->login($user['id']);
            $this->mail->send(
                [$email],
                'Welcome',
                'Your account was created for ' . $email . '.'
            );
        } catch (RuntimeException $e) {
            return $this->json($response, ['error' => $e->getMessage()], 409);
        } catch (Throwable $e) {
            return $this->json($response, ['error' => 'registration failed'], 500);
        }

        return $this->json($response, ['id' => $user['id'], 'email' => $user['email']], 201);
    }

    /** @param array<string, mixed> $data */
    private function json(Response $response, array $data, int $status): Response
    {
        $response->getBody()->write(json_encode($data, JSON_THROW_ON_ERROR));

        return $response->withHeader('Content-Type', 'application/json')->withStatus($status);
    }
}
