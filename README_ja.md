> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# slim テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `slim` ブランチです。最小の [Slim Framework](https://www.slimframework.com/) 4 スターターです。

アプリ本体は [`dev/`](./dev/)。スタック: Slim + slim/psr7 + PHP-DI、PHPUnit スモークテスト付き。

セッション認証 + メールアダプタは [`slim-auth`](https://github.com/b4moss/git-template/tree/slim-auth) を使ってください。

## 前提

- PHP 8.2+ と [Composer](https://getcomposer.org/)

## クイックスタート

```bash
git clone -b slim --single-branch https://github.com/b4moss/git-template.git my-api
cd my-api
make install
make run
```

- `GET /healthz`
- `GET /hello?name=world`

## 構成

```text
dev/
├── public/index.php     # フロントコントローラ
├── config/              # settings / DI / routes
├── src/Action/          # HTTP アクション
└── tests/
```

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make install` | `dev/` で `composer install` |
| `make run` | `php -S localhost:8080 -t public` |
| `make test` | PHPUnit |
| `make ruleset-help` | GitHub ruleset ヘルパー |

## ライセンス

[MIT License](./LICENSE)
