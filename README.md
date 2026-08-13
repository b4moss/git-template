> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# git-template

Stack-specific Git starter templates for [b4moss](https://github.com/b4moss) / [Bicycle for Mind LLC](https://b4m.co.jp/).

Clone the branch you need — that directory is the project root.

Versioning and release notes: [CHANGELOG.md](./CHANGELOG.md).  
Work happens on `dev-vX.Y.Z` branches; each version merges to `main` via PR, then is tagged.

## Branches

| Branch | Stack |
| --- | --- |
| `bun` | Bun / TypeScript |
| `crx-vue` | Chrome MV3 + Vue 3 extension |
| `npm-package` | Vite library + vituum kitchen-sink |
| `go` | Minimal Go hello |
| `go-web` | Go HTTP API (chi) |
| `go-cli` | Go CLI (cobra) |
| `go-wails-nuxt` | Desktop (Wails v2 + Nuxt 3) |
| `vituum-twig` | Vite + Vituum + Twig (MPA static site) |
| `doc-site` | Nuxt Content documentation site |

## What's in each branch

### `bun` / `go`

Shared layout; only `dev/` differs by stack.

```text
.
├── .editorconfig
├── .github/rulesets/     # GitHub repository rulesets
├── .gitignore
├── LICENSE
├── Makefile
├── README.md
├── dev/                  # app root (Bun or Go)
├── docs/
│   ├── charter/          # development charter
│   ├── main.md
│   └── specs/
└── scripts/              # ruleset create / apply helpers
```

- `bun` → `dev/` has `package.json`, `bun.lock`, `tsconfig.json`, `index.ts`
- `go` → `dev/` has `go.mod`, `main.go`

### `go-web` / `go-cli` / `go-wails-nuxt`

Same shared shell as `go` (charter / rulesets / Make). App code stays under `dev/`.

- `go-web` → thin `net/http` + chi server (`cmd/server`, `/healthz`, `/hello`)
- `go-cli` → cobra CLI (`cmd/app`, `version` / `hello`)
- `go-wails-nuxt` → Wails v2 desktop shell + Nuxt 3 SPA frontend (`frontend/`, committed `wailsjs/`)

### `npm-package`

Vite library-mode npm package plus a `kitchen-sink/` demo (vituum-twig based; not published).

```text
.
├── package.json          # @b4moss/example placeholder + exports
├── src/                  # library source
├── vite.config.ts        # build.lib
├── kitchen-sink/         # Vituum + Twig demo (aliases local package)
├── docs/charter/
└── scripts/
```

### `crx-vue`

Chrome MV3 extension scaffold (Vue 3 + Vue Router + Pinia + CRXJS).

```text
.
├── Makefile
├── README.md / README_ja.md
├── docs/charter/
├── scripts/                  # ruleset helpers
└── dev/                      # extension project (manifest, Vite, Vue)
    ├── manifest.json
    ├── vite.config.ts
    └── src/
        ├── scripts/          # background / content / popup / side panel
        └── views/
```

### `vituum-twig`

Vite + Vituum + Twig multi-page static site starter.

```text
.
├── .editorconfig
├── .gitignore
├── package.json
├── public/
├── src/
│   ├── assets/           # scripts / styles
│   ├── components/
│   ├── layouts/
│   └── pages/            # Twig pages (MPA entrypoints)
├── tsconfig.json
└── vite.config.ts
```

### `doc-site`

Nuxt Content docs scaffold (header utilities + footer + sidebar/pager). Product demos and Playground are stripped; nav is configured in `app/config/docsNav.ts`.

```text
.
├── app/
│   ├── components/       # SiteHeader / SiteFooter / DocsSidebar / DocsPager …
│   ├── config/docsNav.ts # sidebar / pager entries
│   ├── layouts/
│   └── pages/[...slug].vue
├── content/
│   ├── en/               # English Markdown placeholders
│   └── ja/               # Japanese Markdown placeholders
├── i18n/locales/
├── nuxt.config.ts        # siteName / githubUrl / footerText …
├── package.json
└── public/
```

## Usage

```bash
git clone -b bun --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
```

Replace `bun` with `crx-vue`, `npm-package`, `go`, `go-web`, `go-cli`, `go-wails-nuxt`, `vituum-twig`, or `doc-site` as needed.

## License

[MIT License](./LICENSE) ([Japanese reference](./LICENSE_ja.md))
