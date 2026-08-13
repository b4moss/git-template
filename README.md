> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# slim-auth template

Slim 4 starter with **session auth** and a **mail adapter** from [b4moss/git-template](https://github.com/b4moss/git-template) (`slim-auth` branch).

App root: [`dev/`](./dev/). Builds on the minimal [`slim`](https://github.com/b4moss/git-template/tree/slim) layout.

## Auth decision

| Concern | Choice |
| --- | --- |
| Auth | Thin session auth (`SessionAuth` + `SessionMiddleware`) |
| Passwords | `password_hash` / `password_verify` (`PASSWORD_DEFAULT`) |
| Users | SQLite via PDO (`UserRepository`, auto schema) |
| Mail | `MailAdapter` interface; default `SymfonyMailAdapter` (Symfony Mailer) |

Not included (on purpose): password reset, OAuth, full HTML UI.

## Prerequisites

- PHP 8.2+ with PDO SQLite
- [Composer](https://getcomposer.org/)

## Quick start

```bash
git clone -b slim-auth --single-branch https://github.com/b4moss/git-template.git my-api
cd my-api
make install
make run
```

### HTTP API

| Method | Path | Body / notes |
| --- | --- | --- |
| `GET` | `/healthz` | liveness |
| `GET` | `/hello?name=` | sample JSON |
| `POST` | `/register` | `{ "email", "password" }` → welcome mail via adapter |
| `POST` | `/login` | `{ "email", "password" }` |
| `POST` | `/logout` | clears session |
| `GET` | `/me` | current user or 401 |

Env knobs: `DB_PATH`, `MAIL_DSN` (default `null://null`), `MAIL_FROM`, `APP_DEBUG`.

## Layout

```text
dev/
├── public/index.php
├── config/
├── src/
│   ├── Action/          # health, hello, register, login, logout, me
│   ├── Auth/            # SessionAuth, UserRepository
│   ├── Mail/            # MailAdapter + SymfonyMailAdapter
│   └── Middleware/
├── var/data/            # SQLite file (gitignored)
└── tests/
```

## Make targets

| Target | Description |
| --- | --- |
| `make install` | `composer install` |
| `make run` | PHP built-in server `:8080` |
| `make test` | PHPUnit |
| `make ruleset-help` | GitHub ruleset helpers |

## License

[MIT License](./LICENSE)
