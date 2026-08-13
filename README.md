> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# go-web template

Thin Go HTTP server starter from [b4moss/git-template](https://github.com/b4moss/git-template) (`go-web` branch).

Stack: `net/http` + [chi](https://github.com/go-chi/chi), graceful shutdown. No DB / auth / frontend.

## Quick start

```bash
git clone -b go-web --single-branch https://github.com/b4moss/git-template.git my-api
cd my-api
make tidy
make run
```

- `GET /healthz`
- `GET /hello?name=world`
- Listen address: `ADDR` or `PORT` (default `:8080`)

## Layout

```text
dev/
├── cmd/server/          # entrypoint
├── internal/config/
└── internal/http/       # router + handlers
```

Rename the module path in `dev/go.mod` (`github.com/example/app`).

## Make targets

| Target | Description |
| --- | --- |
| `make run` | `go run ./cmd/server` |
| `make test` | `go test ./...` |
| `make tidy` | `go mod tidy` |
| `make ruleset-help` | GitHub ruleset helpers |

## License

[MIT License](./LICENSE)
