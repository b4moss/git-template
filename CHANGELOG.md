> **Languages:** [English](./CHANGELOG.md) · [日本語](./CHANGELOG_ja.md)

# Changelog

Versions apply to the **git-template** repository (starter inventory on `main`), not to apps cloned from template branches.

Development flow: work on `dev-vX.Y.Z`, open a PR into the purpose branch (then update `main`), then tag from `main`.

## [0.5.0] — Go family split + Wails

### Added

- Orphan branch `go-web`: thin chi HTTP server (`/healthz`, `/hello`, graceful shutdown)
- Orphan branch `go-cli`: cobra CLI (`version`, `hello`)
- Orphan branch `go-wails-nuxt`: Wails v2 + Nuxt 3 SPA desktop starter (committed `wailsjs/` bindings)
- Kept minimal `go` hello template as-is

### Notes

- Purpose-branch PRs: #15 (`go-web`), #16 (`go-cli`), #17 (`go-wails-nuxt`)

## [0.4.0] — npm-package

### Added

- Orphan branch `npm-package`: Vite library mode + `kitchen-sink/` (vituum-twig based)
- Placeholder API `@b4moss/example` (`greet`), vitest, `exports` / types
- Kitchen-sink aliases the local package for interactive demos (not published)

## [0.3.0] — crx-vue

### Added

- Orphan branch `crx-vue`: Chrome MV3 + Vue 3 + Vue Router + Pinia + `@crxjs/vite-plugin`
- Sanitized from the prior CRX template (generic naming, tighter permissions, stub UI)
- Bilingual README and Make targets (`install` / `dev` / `build`)

## [0.2.0] — bun polish

### Changed

- Polished the `bun` orphan branch as the reference TypeScript / Bun starter:
  - Bilingual README (EN/JA)
  - `make install` / `make run` / `make test`
  - Package name placeholder `@b4moss/app`
  - Smoke test in `dev/`

## [0.1.0] — baseline

### Included branches

| Branch | Role |
| --- | --- |
| `main` | Usage guide (EN/JA), LICENSE |
| `bun` | Bun / TypeScript starter |
| `go` | Minimal Go starter |
| `vituum-twig` | Vite + Vituum + Twig MPA |
| `doc-site` | Nuxt Content documentation scaffold |

### Notes

- Clone a stack branch with `git clone -b <branch> --single-branch`; that directory is the project root.
- Shared shell (charter / rulesets) lives on stack branches; `main` stays documentation-only.
