> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# go-cli template

Go CLI starter from [b4moss/git-template](https://github.com/b4moss/git-template) (`go-cli` branch).

Stack: [cobra](https://github.com/spf13/cobra) with `cmd/app` + `internal/app` subcommands.

## Quick start

```bash
git clone -b go-cli --single-branch https://github.com/b4moss/git-template.git my-cli
cd my-cli
make tidy
make run
make run ARGS='hello gopher --shout'
```

## Layout

```text
dev/
├── cmd/app/           # main
└── internal/app/      # cobra commands (version, hello)
```

Rename the module path in `dev/go.mod` and the binary `Use:` name in `internal/app`.

## Make targets

| Target | Description |
| --- | --- |
| `make run` | `go run ./cmd/app` (pass `ARGS='...'`) |
| `make test` | `go test ./...` |
| `make tidy` | `go mod tidy` |

## License

[MIT License](./LICENSE)
