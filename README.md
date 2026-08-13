# git-template

スタック別の Git スターターテンプレートです。使いたいブランチを clone すると、そのディレクトリがそのままプロジェクト root になります。

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
