> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# npm-package template

Vite **library mode** npm package scaffold from [b4moss/git-template](https://github.com/b4moss/git-template) (`npm-package` branch), plus a **kitchen-sink** demo based on `vituum-twig`.

- Library: `src/` → `make build`
- Demo: `kitchen-sink/` (not published; omitted from `package.json` `files`)

## Quick start

```bash
git clone -b npm-package --single-branch https://github.com/b4moss/git-template.git my-lib
cd my-lib
make install
make test
make build
make dev          # kitchen-sink on Vite / Vituum / Twig
```

## Rename placeholders

| Location | Default |
| --- | --- |
| `package.json` → `name` | `@b4moss/example` |
| `vite.config.ts` → `fileName` / global name | `example` / `B4mossExample` |
| kitchen-sink alias | `@b4moss/example` → `../src/index.ts` |

## Make targets

| Target | Description |
| --- | --- |
| `make install` | npm workspaces install |
| `make build` | library build + declarations |
| `make test` | vitest |
| `make dev` | kitchen-sink dev server |
| `make build-sink` | kitchen-sink static build |

## License

[MIT License](./LICENSE)
