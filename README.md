> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# laravel-sail template

Laravel + [Sail](https://laravel.com/docs/sail) (Docker) starter from [b4moss/git-template](https://github.com/b4moss/git-template) (`laravel-sail` branch).

Ships the b4moss shell (charter / rulesets / docs / scripts). The Laravel app is **generated** into [`dev/`](./dev/) by Make — not committed. This branch always installs Sail (`mysql` + `redis` services by default).

For local PHP without Docker, use the [`laravel`](https://github.com/b4moss/git-template/tree/laravel) branch instead.

## Prerequisites

- PHP + [Composer](https://getcomposer.org/) (needed for `make setup` on the host)
- [Docker](https://docs.docker.com/get-docker/) for `make up`
- Optional for Breeze: Node.js + npm

## Quick start

```bash
git clone -b laravel-sail --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
make setup
make up
```

App URL is usually `http://localhost` (see Sail docs / `.env` after setup).

### Setup options

| Invocation | Effect |
| --- | --- |
| `make setup` | Latest Laravel + Sail into `dev/` |
| `make setup LARAVEL=12.0` | Pin constraint |
| `make setup BREEZE=1` | + Breeze (`STACK=blade` by default) |
| `make setup FORCE=1` | Wipe existing `dev/` and recreate |

Second `make setup` without `FORCE=1` fails (idempotency). No Sail flag is required — this branch is Sail-first.

## Layout

```text
.
├── Makefile                 # setup / up / down / test + rulesets
├── scripts/setup-laravel.sh # SAIL=1 from this Makefile
├── docs/charter/
└── dev/                     # created by make setup (includes docker-compose.yml)
```

## Make targets

| Target | Description |
| --- | --- |
| `make setup` | Generate Laravel + Sail into `dev/` |
| `make up` / `make serve` | `./vendor/bin/sail up -d` |
| `make down` | `./vendor/bin/sail down` |
| `make test` | Sail / artisan tests |
| `make tidy` | Composer install via Sail when available |
| `make ruleset-help` | GitHub ruleset helpers |

## License

[MIT License](./LICENSE)
