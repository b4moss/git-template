> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# go-wails-nuxt template

Desktop app starter (Wails v2 + Nuxt 3, SPA) from [b4moss/git-template](https://github.com/b4moss/git-template) (`go-wails-nuxt` branch).

App root: [`dev/`](./dev/). Go bindings are exposed to the Vue UI via generated `frontend/wailsjs/`.

## Prerequisites

- [Go](https://go.dev/dl/) (see `dev/go.mod` `toolchain`)
- [Node.js](https://nodejs.org/) + npm
- [Wails CLI](https://wails.io/docs/gettingstarted/installation) v2 (`go install github.com/wailsapp/wails/v2/cmd/wails@latest`)

## Quick start

```bash
git clone -b go-wails-nuxt --single-branch https://github.com/b4moss/git-template.git my-desktop
cd my-desktop
make install
make dev
```

Production package:

```bash
make build
```

## Layout

```text
dev/
├── main.go / app.go     # Wails entry + Greet binding
├── wails.json
├── build/               # icons, platform metadata
└── frontend/            # Nuxt 3 (ssr: false)
    ├── wailsjs/         # generated bindings (committed)
    └── …                # Vue / Nuxt sources
```

Rename the module path in `dev/go.mod` (`github.com/example/app`), then run `make bindings` to refresh JS stubs.

## Make targets

| Target | Description |
| --- | --- |
| `make install` | `npm install` in `dev/frontend` |
| `make bindings` | `wails generate module` (JS/TS bindings) |
| `make frontend` | `nuxt generate` → `frontend/.output/public` |
| `make dev` | `wails dev` (hot reload) |
| `make build` | `wails build` |
| `make test` | `go test ./...` |
| `make tidy` | `go mod tidy` |
| `make ruleset-help` | GitHub ruleset helpers |

## License

[MIT License](./LICENSE)
