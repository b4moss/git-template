> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# go-wails-nuxt テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `go-wails-nuxt` ブランチです。Wails v2 + Nuxt 3（SPA）のデスクトップアプリ雛形です。

アプリ本体は [`dev/`](./dev/)。Go のバインディングは生成物 `frontend/wailsjs/` 経由で Vue から呼びます。

## 前提

- [Go](https://go.dev/dl/)（`dev/go.mod` の `toolchain` を参照）
- [Node.js](https://nodejs.org/) + npm
- [Wails CLI](https://wails.io/docs/gettingstarted/installation) v2（`go install github.com/wailsapp/wails/v2/cmd/wails@latest`）

## クイックスタート

```bash
git clone -b go-wails-nuxt --single-branch https://github.com/b4moss/git-template.git my-desktop
cd my-desktop
make install
make dev
```

配布用ビルド:

```bash
make build
```

## 構成

```text
dev/
├── main.go / app.go     # Wails エントリ + Greet
├── wails.json
├── build/               # アイコン・OS メタデータ
└── frontend/            # Nuxt 3（ssr: false）
    ├── wailsjs/         # 生成バインディング（コミット対象）
    └── …                # Vue / Nuxt ソース
```

`dev/go.mod` のモジュールパス（`github.com/example/app`）を差し替えたら `make bindings` で JS スタブを更新してください。

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make install` | `dev/frontend` で `npm install` |
| `make bindings` | `wails generate module` |
| `make frontend` | `nuxt generate` → `frontend/.output/public` |
| `make dev` | `wails dev` |
| `make build` | `wails build` |
| `make test` | `go test ./...` |
| `make tidy` | `go mod tidy` |
| `make ruleset-help` | GitHub ruleset ヘルパー |

## ライセンス

[MIT License](./LICENSE)
