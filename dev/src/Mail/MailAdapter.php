<?php

declare(strict_types=1);

namespace App\Mail;

interface MailAdapter
{
    /**
     * @param list<string> $to
     */
    public function send(array $to, string $subject, string $textBody): void;
}
