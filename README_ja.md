> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# git-template

[b4moss](https://github.com/b4moss) / [合同会社 知的・自転車](https://b4m.co.jp/)（Bicycle for Mind LLC）向けの、スタック別 Git スターターテンプレートです。

使いたいブランチを clone すると、そのディレクトリがそのままプロジェクト root になります。

バージョンとリリースノート: [CHANGELOG_ja.md](./CHANGELOG_ja.md)。  
作業は `dev-vX.Y.Z` ブランチで行い、各バージョンを PR で `main` にマージしたあとタグします。

## ブランチ

| ブランチ | 内容 |
| --- | --- |
| `bun` | Bun / TypeScript |
| `go` | Go |
| `vituum-twig` | Vite + Vituum + Twig（MPA 静的サイト） |
| `doc-site` | Nuxt Content ドキュメントサイト |

## 各ブランチの内包物

### `bun` / `go`

共通の骨格で、差分はほぼ `dev/` のみです。

```text
.
├── .editorconfig
├── .github/rulesets/     # GitHub リポジトリ ruleset
├── .gitignore
├── LICENSE
├── Makefile
├── README.md
├── dev/                  # アプリ本体（Bun または Go）
├── docs/
│   ├── charter/          # 開発憲章
│   ├── main.md
│   └── specs/
└── scripts/              # ruleset 作成・適用ヘルパー
```

- `bun` → `dev/` に `package.json` / `bun.lock` / `tsconfig.json` / `index.ts`
- `go` → `dev/` に `go.mod` / `main.go`

### `vituum-twig`

Vite + Vituum + Twig のマルチページ静的サイト雛形です。

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
│   └── pages/            # Twig ページ（MPA エントリ）
├── tsconfig.json
└── vite.config.ts
```

### `doc-site`

Nuxt Content ドキュメントサイト雛形です（ヘッダーユーティリティ＋フッター＋サイドバー／ページャー）。製品デモや Playground は除去済み。ナビは `app/config/docsNav.ts` で設定します。

```text
.
├── app/
│   ├── components/       # SiteHeader / SiteFooter / DocsSidebar / DocsPager …
│   ├── config/docsNav.ts # サイドバー／ページャー
│   ├── layouts/
│   └── pages/[...slug].vue
├── content/
│   ├── en/               # 英語 Markdown プレースホルダ
│   └── ja/               # 日本語 Markdown プレースホルダ
├── i18n/locales/
├── nuxt.config.ts        # siteName / githubUrl / footerText …
├── package.json
└── public/
```

## 使い方

```bash
git clone -b bun --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
```

`bun` の部分を `go` / `vituum-twig` / `doc-site` に差し替えてください。

## ライセンス

[MIT License](./LICENSE)（[日本語参考訳](./LICENSE_ja.md)）
