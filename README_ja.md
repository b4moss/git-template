> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# bun テンプレート

[b4moss/git-template](https://github.com/b4moss/git-template) の `bun` ブランチです（Bun / TypeScript スターター）。

アプリ本体は [`dev/`](./dev/)。リポジトリ直下に共通ドキュメントと GitHub ruleset ヘルパーがあります。

## クイックスタート

```bash
git clone -b bun --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
make install
make run
```

または:

```bash
cd dev
bun install
bun run index.ts
```

## プレースホルダの差し替え

| 場所 | 初期値 | やること |
| --- | --- | --- |
| `dev/package.json` → `name` | `@b4moss/app` | パッケージ名を付ける |
| ルート README のタイトル | bun テンプレート | プロダクト名に合わせる |

## Make ターゲット

| ターゲット | 内容 |
| --- | --- |
| `make install` | `dev/` で `bun install` |
| `make run` | `dev/index.ts` を実行 |
| `make test` | `dev/` で `bun test` |
| `make ruleset-help` | GitHub ruleset ヘルパーのヘルプ |

## ライセンス

[MIT License](./LICENSE)
