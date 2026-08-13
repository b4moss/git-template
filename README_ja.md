> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# slim-auth テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `slim-auth` ブランチです。**セッション認証**と**メールアダプタ**付きの Slim 4 スターターです。

アプリ本体は [`dev/`](./dev/)。最小の [`slim`](https://github.com/b4moss/git-template/tree/slim) 構成を拡張しています。

## Auth の決定

| 項目 | 選択 |
| --- | --- |
| Auth | 薄いセッション認証（`SessionAuth` + `SessionMiddleware`） |
| パスワード | `password_hash` / `password_verify`（`PASSWORD_DEFAULT`） |
| ユーザー | SQLite + PDO（`UserRepository`、スキーマ自動作成） |
| メール | `MailAdapter` インターフェース、既定は `SymfonyMailAdapter` |

パスワードリセット / OAuth / フル HTML UI は意図的に含みません。

## 前提

- PHP 8.2+（PDO SQLite）
- [Composer](https://getcomposer.org/)

## クイックスタート

```bash
git clone -b slim-auth --single-branch https://github.com/b4moss/git-template.git my-api
cd my-api
make install
make run
```

### HTTP API

| メソッド | パス | 内容 |
| --- | --- | --- |
| `GET` | `/healthz` | 生存確認 |
| `GET` | `/hello?name=` | サンプル JSON |
| `POST` | `/register` | `{ "email", "password" }` → アダプタ経由で welcome メール |
| `POST` | `/login` | `{ "email", "password" }` |
| `POST` | `/logout` | セッション破棄 |
| `GET` | `/me` | 現在ユーザー（未ログインは 401） |

環境変数: `DB_PATH`、`MAIL_DSN`（既定 `null://null`）、`MAIL_FROM`、`APP_DEBUG`。

## 構成

```text
dev/
├── public/index.php
├── config/
├── src/
│   ├── Action/
│   ├── Auth/
│   ├── Mail/
│   └── Middleware/
├── var/data/            # SQLite（gitignore）
└── tests/
```

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make install` | `composer install` |
| `make run` | PHP 組込サーバー `:8080` |
| `make test` | PHPUnit |
| `make ruleset-help` | GitHub ruleset ヘルパー |

## ライセンス

[MIT License](./LICENSE)
