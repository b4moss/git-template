> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# laravel-sail テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `laravel-sail` ブランチです。Laravel + [Sail](https://laravel.com/docs/sail)（Docker）スターターです。

b4moss 共通殻（charter / rulesets / docs / scripts）を同梱します。Laravel 本体は Make で [`dev/`](./dev/) に**生成**し、テンプレにはコミットしません。このブランチは常に Sail を入れます（既定サービス: `mysql` + `redis`）。

Docker なしのローカル PHP は [`laravel`](https://github.com/b4moss/git-template/tree/laravel) ブランチを使ってください。

## 前提

- PHP + [Composer](https://getcomposer.org/)（ホスト上の `make setup` 用）
- [Docker](https://docs.docker.com/get-docker/)（`make up` 用）
- Breeze 利用時: Node.js + npm

## クイックスタート

```bash
git clone -b laravel-sail --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
make setup
make up
```

アプリ URL は通常 `http://localhost`（setup 後の `.env` / Sail ドキュメントを参照）。

### setup オプション

| 呼び出し | 内容 |
| --- | --- |
| `make setup` | 最新 Laravel + Sail を `dev/` へ |
| `make setup LARAVEL=12.0` | バージョン制約を指定 |
| `make setup BREEZE=1` | Breeze 追加（既定 `STACK=blade`） |
| `make setup FORCE=1` | 既存 `dev/` を消して再生成 |

`FORCE=1` なしの 2 回目 `make setup` は失敗します。Sail 用フラグは不要です（ブランチ自体が Sail 前提）。

## 構成

```text
.
├── Makefile                 # setup / up / down / test + rulesets
├── scripts/setup-laravel.sh # この Makefile から SAIL=1
├── docs/charter/
└── dev/                     # make setup で生成（docker-compose.yml 含む）
```

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make setup` | Laravel + Sail を `dev/` に生成 |
| `make up` / `make serve` | `./vendor/bin/sail up -d` |
| `make down` | `./vendor/bin/sail down` |
| `make test` | Sail / artisan テスト |
| `make tidy` | 可能なら Sail 経由で composer install |
| `make ruleset-help` | GitHub ruleset ヘルパー |

## ライセンス

[MIT License](./LICENSE)
