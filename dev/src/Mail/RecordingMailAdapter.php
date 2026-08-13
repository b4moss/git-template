<?php

declare(strict_types=1);

namespace App\Mail;

/** Test double that records outbound messages. */
final class RecordingMailAdapter implements MailAdapter
{
    /** @var list<array{to: list<string>, subject: string, body: string}> */
    public array $sent = [];

    public function send(array $to, string $subject, string $textBody): void
    {
        $this->sent[] = [
            'to' => $to,
            'subject' => $subject,
            'body' => $textBody,
        ];
    }
}
