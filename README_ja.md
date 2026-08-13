> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# npm-package テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `npm-package` ブランチです。Vite **library mode** の npm パッケージ雛形と、`vituum-twig` ベースの **kitchen-sink** デモを含みます。

- ライブラリ: `src/` → `make build`
- デモ: `kitchen-sink/`（publish 対象外。`package.json` の `files` に含めない）

## クイックスタート

```bash
git clone -b npm-package --single-branch https://github.com/b4moss/git-template.git my-lib
cd my-lib
make install
make test
make build
make dev          # kitchen-sink（Vite / Vituum / Twig）
```

## プレースホルダ

| 場所 | 初期値 |
| --- | --- |
| `package.json` → `name` | `@b4moss/example` |
| `vite.config.ts` の fileName / グローバル名 | `example` / `B4mossExample` |
| kitchen-sink の alias | `@b4moss/example` → `../src/index.ts` |

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make install` | npm workspaces インストール |
| `make build` | ライブラリビルド + 型定義 |
| `make test` | vitest |
| `make dev` | kitchen-sink 開発サーバ |
| `make build-sink` | kitchen-sink 静的ビルド |

## ライセンス

[MIT License](./LICENSE)
