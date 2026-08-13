> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# bun template

Bun / TypeScript starter from [b4moss/git-template](https://github.com/b4moss/git-template) (`bun` branch).

App code lives in [`dev/`](./dev/). Shared docs and GitHub ruleset helpers live at the repo root.

## Quick start

```bash
git clone -b bun --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
make install
make run
```

Or:

```bash
cd dev
bun install
bun run index.ts
```

## Rename placeholders

| Location | Default | Action |
| --- | --- | --- |
| `dev/package.json` → `name` | `@b4moss/app` | Set your package name |
| Root README titles | bun template | Rename for your product |

## Make targets

| Target | Description |
| --- | --- |
| `make install` | `bun install` in `dev/` |
| `make run` | Run `dev/index.ts` |
| `make test` | `bun test` in `dev/` |
| `make ruleset-help` | GitHub ruleset helper help |

## License

[MIT License](./LICENSE)
