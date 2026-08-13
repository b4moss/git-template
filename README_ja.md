> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# git-template

[b4moss](https://github.com/b4moss) / [合同会社 知的・自転車](https://b4m.co.jp/)（Bicycle for Mind LLC）向けの、スタック別 Git スターターテンプレートです。

使いたいブランチを clone すると、そのディレクトリがそのままプロジェクト root になります。

## ブランチ

| ブランチ | 内容 |
| --- | --- |
| `bun` | Bun / TypeScript |
| `go` | Go |
| `vituum-twig` | Vite + Vituum + Twig（MPA 静的サイト） |

## 使い方

```bash
git clone -b bun --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
```

`bun` の部分を `go` または `vituum-twig` に差し替えてください。

## ライセンス

[MIT License](./LICENSE)（[日本語参考訳](./LICENSE_ja.md)）
