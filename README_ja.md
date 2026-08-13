> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# go-cli テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `go-cli` ブランチです。

スタック: [cobra](https://github.com/spf13/cobra)。`cmd/app` + `internal/app` にサブコマンドがあります。

## クイックスタート

```bash
git clone -b go-cli --single-branch https://github.com/b4moss/git-template.git my-cli
cd my-cli
make tidy
make run
make run ARGS='hello gopher --shout'
```

## 構成

```text
dev/
├── cmd/app/           # main
└── internal/app/      # cobra コマンド（version, hello）
```

`dev/go.mod` のモジュールパスと、`internal/app` のバイナリ名（`Use:`）を差し替えてください。

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make run` | `go run ./cmd/app`（`ARGS='...'` 可） |
| `make test` | `go test ./...` |
| `make tidy` | `go mod tidy` |

## ライセンス

[MIT License](./LICENSE)
