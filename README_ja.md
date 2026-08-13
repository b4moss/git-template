> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# crx-vue テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `crx-vue` ブランチです（Chrome MV3 + Vue 3 + Vue Router + Pinia + `@crxjs/vite-plugin`）。

拡張のプロジェクト root は [`dev/`](./dev/) です。

## クイックスタート

```bash
git clone -b crx-vue --single-branch https://github.com/b4moss/git-template.git my-ext
cd my-ext
make install
make dev
```

`make build` 後は `dev/dist` を未パック拡張として読み込めます。開発時は `make dev`（CRXJS + Vite）を使います。

## 含まれる面

- Popup / options / side panel
- Background service worker
- Content script スタブ（初期は localhost 向け match）

権限は `dev/manifest.json` でプロダクトに合わせて調整してください。

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make install` | `dev/` で `npm install` |
| `make dev` | Vite + CRXJS 開発サーバ |
| `make build` | 本番ビルド |
| `make ruleset-help` | GitHub ruleset ヘルパー |

## ライセンス

[MIT License](./LICENSE)
