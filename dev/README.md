# dev

ローカルの Go を使います（Docker / mise 不要）。バージョンは `go.mod` の `go` / `toolchain` で固定します。

前提: マシンに Go 1.21 以上が入っていること。

## セットアップ

```bash
cd dev
go mod tidy
```

初回（または toolchain 変更後）は、必要なら指定バージョンの toolchain を自動取得します。

## 実行

```bash
go run .
```

## テスト

```bash
go test ./...
```

## Go バージョンの変更

`go.mod` を編集します。

```go
go 1.25

toolchain go1.25.7
```

変更後は `go mod tidy` を実行してください。

## モジュールパス

テンプレートの module path は `github.com/example/app` です。利用時に差し替えてください。

```bash
go mod edit -module github.com/your-org/your-app
```
