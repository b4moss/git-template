<?php

declare(strict_types=1);

namespace App\Auth;

use PDO;
use RuntimeException;

final class UserRepository
{
    public function __construct(private readonly PDO $pdo)
    {
    }

    public function ensureSchema(): void
    {
        $this->pdo->exec(
            'CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                created_at TEXT NOT NULL
            )'
        );
    }

    /** @return array{id:int,email:string,password_hash:string}|null */
    public function findByEmail(string $email): ?array
    {
        $stmt = $this->pdo->prepare('SELECT id, email, password_hash FROM users WHERE email = :email LIMIT 1');
        $stmt->execute(['email' => $email]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row === false) {
            return null;
        }

        return [
            'id' => (int) $row['id'],
            'email' => (string) $row['email'],
            'password_hash' => (string) $row['password_hash'],
        ];
    }

    /** @return array{id:int,email:string}|null */
    public function findById(int $id): ?array
    {
        $stmt = $this->pdo->prepare('SELECT id, email FROM users WHERE id = :id LIMIT 1');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row === false) {
            return null;
        }

        return [
            'id' => (int) $row['id'],
            'email' => (string) $row['email'],
        ];
    }

    /** @return array{id:int,email:string} */
    public function create(string $email, string $password): array
    {
        if ($this->findByEmail($email) !== null) {
            throw new RuntimeException('email already registered');
        }

        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $this->pdo->prepare(
            'INSERT INTO users (email, password_hash, created_at) VALUES (:email, :hash, :created_at)'
        );
        $stmt->execute([
            'email' => $email,
            'hash' => $hash,
            'created_at' => gmdate('c'),
        ]);

        return [
            'id' => (int) $this->pdo->lastInsertId(),
            'email' => $email,
        ];
    }
}
