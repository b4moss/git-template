# dev

Wails + Nuxt app sources. Prefer root `make` targets (`install`, `dev`, `build`, `test`).

## Toolchain

- Go: pinned in `go.mod` (`go` / `toolchain`)
- Frontend: Node + npm in `frontend/`
- Desktop shell: Wails CLI v2

After changing exported Go methods, run `make bindings` from the repo root (or `wails generate module` here).
`frontend/wailsjs/` is committed so `npm run generate` works before the first Wails build.

## Chicken-and-egg note

`main.go` embeds `frontend/.output/public`. That directory is produced by `nuxt generate` (`make frontend` / `wails build`). Fresh clones should use `make build` or `make frontend` before a plain `go build`.
