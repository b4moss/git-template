> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# laravel template

Local PHP Laravel starter from [b4moss/git-template](https://github.com/b4moss/git-template) (`laravel` branch).

Ships the b4moss shell (charter / rulesets / docs / scripts). The Laravel app is **generated** into [`dev/`](./dev/) by Make — not committed.

For Sail / Docker, use the [`laravel-sail`](https://github.com/b4moss/git-template/tree/laravel-sail) branch instead.

## Prerequisites

- PHP (see current Laravel requirements) + [Composer](https://getcomposer.org/)
- Optional for Breeze: Node.js + npm

## Quick start

```bash
git clone -b laravel --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
make setup
make serve
```

### Setup options

| Invocation | Effect |
| --- | --- |
| `make setup` | Latest Laravel into `dev/` |
| `make setup LARAVEL=12.0` | Pin constraint (`laravel/laravel:12.0`) |
| `make setup BREEZE=1` | + Breeze (`STACK=blade` by default) |
| `make setup BREEZE=1 STACK=blade` | Explicit Breeze stack |
| `make setup FORCE=1` | Wipe existing `dev/` and recreate |

Second `make setup` without `FORCE=1` fails (idempotency).

## Layout

```text
.
├── Makefile                 # setup / serve / test + rulesets
├── scripts/setup-laravel.sh
├── docs/charter/
└── dev/                     # created by make setup
```

## Make targets

| Target | Description |
| --- | --- |
| `make setup` | Generate Laravel into `dev/` |
| `make serve` | `php artisan serve` |
| `make test` | PHPUnit / `artisan test` |
| `make tidy` | `composer install` in `dev/` |
| `make ruleset-help` | GitHub ruleset helpers |

## License

[MIT License](./LICENSE)
