<?php

declare(strict_types=1);

namespace App\Mail;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

final class SymfonyMailAdapter implements MailAdapter
{
    public function __construct(
        private readonly MailerInterface $mailer,
        private readonly string $from,
    ) {
    }

    public function send(array $to, string $subject, string $textBody): void
    {
        $email = (new Email())
            ->from($this->from)
            ->subject($subject)
            ->text($textBody);

        foreach ($to as $address) {
            $email->addTo($address);
        }

        $this->mailer->send($email);
    }
}
