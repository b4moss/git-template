> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# slim template

Minimal [Slim Framework](https://www.slimframework.com/) 4 starter from [b4moss/git-template](https://github.com/b4moss/git-template) (`slim` branch).

App root: [`dev/`](./dev/). Stack: Slim + slim/psr7 + PHP-DI, PHPUnit smoke tests.

For session auth + mail adapter, use [`slim-auth`](https://github.com/b4moss/git-template/tree/slim-auth).

## Prerequisites

- PHP 8.2+ and [Composer](https://getcomposer.org/)

## Quick start

```bash
git clone -b slim --single-branch https://github.com/b4moss/git-template.git my-api
cd my-api
make install
make run
```

- `GET /healthz`
- `GET /hello?name=world`

## Layout

```text
dev/
├── public/index.php     # front controller
├── config/              # settings / DI / routes
├── src/Action/          # HTTP actions
└── tests/
```

## Make targets

| Target | Description |
| --- | --- |
| `make install` | `composer install` in `dev/` |
| `make run` | `php -S localhost:8080 -t public` |
| `make test` | PHPUnit |
| `make ruleset-help` | GitHub ruleset helpers |

## License

[MIT License](./LICENSE)
