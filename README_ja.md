> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# laravel テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `laravel` ブランチです。ローカル PHP 向け Laravel スターターです。

b4moss 共通殻（charter / rulesets / docs / scripts）を同梱します。Laravel 本体は Make で [`dev/`](./dev/) に**生成**し、テンプレにはコミットしません。

Sail / Docker 利用は [`laravel-sail`](https://github.com/b4moss/git-template/tree/laravel-sail) ブランチを使ってください。

## 前提

- PHP（当該 Laravel の要件）+ [Composer](https://getcomposer.org/)
- Breeze 利用時: Node.js + npm

## クイックスタート

```bash
git clone -b laravel --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
make setup
make serve
```

### setup オプション

| 呼び出し | 内容 |
| --- | --- |
| `make setup` | 最新 Laravel を `dev/` へ |
| `make setup LARAVEL=12.0` | バージョン制約を指定 |
| `make setup BREEZE=1` | Breeze 追加（既定 `STACK=blade`） |
| `make setup BREEZE=1 STACK=blade` | Breeze スタック明示 |
| `make setup FORCE=1` | 既存 `dev/` を消して再生成 |

`FORCE=1` なしの 2 回目 `make setup` は失敗します（冪等性）。

## 構成

```text
.
├── Makefile                 # setup / serve / test + rulesets
├── scripts/setup-laravel.sh
├── docs/charter/
└── dev/                     # make setup で生成
```

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make setup` | Laravel を `dev/` に生成 |
| `make serve` | `php artisan serve` |
| `make test` | PHPUnit / `artisan test` |
| `make tidy` | `dev/` で `composer install` |
| `make ruleset-help` | GitHub ruleset ヘルパー |

## ライセンス

[MIT License](./LICENSE)
