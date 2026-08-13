<?php

declare(strict_types=1);

namespace Tests;

use App\Action\LoginAction;
use App\Action\MeAction;
use App\Action\RegisterAction;
use App\Auth\SessionAuth;
use App\Auth\UserRepository;
use App\Mail\RecordingMailAdapter;
use PDO;
use PHPUnit\Framework\TestCase;
use Slim\Psr7\Factory\ServerRequestFactory;
use Slim\Psr7\Response;

final class AuthFlowTest extends TestCase
{
    private UserRepository $users;
    private SessionAuth $auth;
    private RecordingMailAdapter $mail;

    protected function setUp(): void
    {
        $_SESSION = [];
        $pdo = new PDO('sqlite::memory:');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->users = new UserRepository($pdo);
        $this->users->ensureSchema();
        $this->auth = new SessionAuth($this->users);
        $this->mail = new RecordingMailAdapter();
    }

    public function testRegisterLoginMe(): void
    {
        $register = new RegisterAction($this->users, $this->auth, $this->mail);
        $req = (new ServerRequestFactory())
            ->createServerRequest('POST', '/register')
            ->withParsedBody(['email' => 'a@example.com', 'password' => 'password1']);
        $res = $register($req, new Response());
        self::assertSame(201, $res->getStatusCode());
        self::assertCount(1, $this->mail->sent);
        self::assertSame('Welcome', $this->mail->sent[0]['subject']);

        $me = new MeAction($this->auth);
        $meRes = $me((new ServerRequestFactory())->createServerRequest('GET', '/me'), new Response());
        self::assertSame(200, $meRes->getStatusCode());
        self::assertStringContainsString('a@example.com', (string) $meRes->getBody());

        $this->auth->logout();
        $login = new LoginAction($this->users, $this->auth);
        $loginRes = $login(
            (new ServerRequestFactory())
                ->createServerRequest('POST', '/login')
                ->withParsedBody(['email' => 'a@example.com', 'password' => 'password1']),
            new Response()
        );
        self::assertSame(200, $loginRes->getStatusCode());
        self::assertNotNull($this->auth->currentUser());
    }
}
