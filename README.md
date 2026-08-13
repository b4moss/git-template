> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# crx-vue template

Chrome MV3 extension starter (Vue 3 + Vue Router + Pinia + `@crxjs/vite-plugin`) from [b4moss/git-template](https://github.com/b4moss/git-template) (`crx-vue` branch).

Extension project root: [`dev/`](./dev/).

## Quick start

```bash
git clone -b crx-vue --single-branch https://github.com/b4moss/git-template.git my-ext
cd my-ext
make install
make dev
```

Load the unpacked extension from `dev/dist` (after `make build`) or follow the CRXJS Vite dev workflow from `make dev`.

## Surfaces included

- Popup / options / side panel
- Background service worker
- Content script stub (localhost matches by default)

Tighten or widen `dev/manifest.json` permissions for your product.

## Make targets

| Target | Description |
| --- | --- |
| `make install` | `npm install` in `dev/` |
| `make dev` | Vite + CRXJS dev server |
| `make build` | Production build |
| `make ruleset-help` | GitHub ruleset helpers |

## License

[MIT License](./LICENSE)
