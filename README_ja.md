> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# go-web テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `go-web` ブランチです。薄い Go HTTP サーバー雛形です。

スタック: `net/http` + [chi](https://github.com/go-chi/chi)、graceful shutdown。DB / 認証 / フロントは含みません。

## クイックスタート

```bash
git clone -b go-web --single-branch https://github.com/b4moss/git-template.git my-api
cd my-api
make tidy
make run
```

- `GET /healthz`
- `GET /hello?name=world`
- 待受: `ADDR` または `PORT`（既定 `:8080`）

## 構成

```text
dev/
├── cmd/server/          # エントリポイント
├── internal/config/
└── internal/http/       # ルータ + ハンドラ
```

`dev/go.mod` のモジュールパス（`github.com/example/app`）を差し替えてください。

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make run` | `go run ./cmd/server` |
| `make test` | `go test ./...` |
| `make tidy` | `go mod tidy` |
| `make ruleset-help` | GitHub ruleset ヘルパー |

## ライセンス

[MIT License](./LICENSE)
