<?php

declare(strict_types=1);

namespace App\Auth;

final class SessionAuth
{
    private const KEY = 'user_id';

    public function __construct(private readonly UserRepository $users)
    {
    }

    public function login(int $userId): void
    {
        $_SESSION[self::KEY] = $userId;
    }

    public function logout(): void
    {
        unset($_SESSION[self::KEY]);
    }

    public function userId(): ?int
    {
        $id = $_SESSION[self::KEY] ?? null;

        return is_int($id) ? $id : (is_numeric($id) ? (int) $id : null);
    }

    /** @return array{id:int,email:string}|null */
    public function currentUser(): ?array
    {
        $id = $this->userId();
        if ($id === null) {
            return null;
        }

        return $this->users->findById($id);
    }
}
