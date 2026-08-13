<?php

declare(strict_types=1);

use App\Auth\SessionAuth;
use App\Auth\UserRepository;
use App\Mail\MailAdapter;
use App\Mail\SymfonyMailAdapter;
use DI\ContainerBuilder;
use PDO;
use Psr\Container\ContainerInterface;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mailer\Transport;

return static function (ContainerBuilder $builder): void {
    $builder->addDefinitions([
        PDO::class => static function (ContainerInterface $c): PDO {
            $path = (string) $c->get('settings')['dbPath'];
            $dir = dirname($path);
            if (!is_dir($dir)) {
                mkdir($dir, 0775, true);
            }
            $pdo = new PDO('sqlite:' . $path);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $repo = new UserRepository($pdo);
            $repo->ensureSchema();

            return $pdo;
        },
        UserRepository::class => static function (ContainerInterface $c): UserRepository {
            return new UserRepository($c->get(PDO::class));
        },
        SessionAuth::class => static function (ContainerInterface $c): SessionAuth {
            return new SessionAuth($c->get(UserRepository::class));
        },
        MailerInterface::class => static function (ContainerInterface $c): MailerInterface {
            $dsn = (string) $c->get('settings')['mailDsn'];

            return new Mailer(Transport::fromDsn($dsn));
        },
        MailAdapter::class => static function (ContainerInterface $c): MailAdapter {
            return new SymfonyMailAdapter(
                $c->get(MailerInterface::class),
                (string) $c->get('settings')['mailFrom'],
            );
        },
    ]);
};
