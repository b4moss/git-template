<?php

declare(strict_types=1);

namespace Tests;

use App\Action\HealthAction;
use App\Action\HelloAction;
use PHPUnit\Framework\TestCase;
use Slim\Psr7\Factory\ServerRequestFactory;
use Slim\Psr7\Response;

final class HealthTest extends TestCase
{
    public function testHealthz(): void
    {
        $request = (new ServerRequestFactory())->createServerRequest('GET', '/healthz');
        $response = (new HealthAction())($request, new Response());

        self::assertSame(200, $response->getStatusCode());
        self::assertSame('{"ok":true}', (string) $response->getBody());
    }

    public function testHello(): void
    {
        $request = (new ServerRequestFactory())
            ->createServerRequest('GET', '/hello')
            ->withQueryParams(['name' => 'Slim']);
        $response = (new HelloAction())($request, new Response());

        self::assertSame('{"message":"Hello, Slim!"}', (string) $response->getBody());
    }
}
