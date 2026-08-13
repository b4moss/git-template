> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# doc-site

Nuxt Content ドキュメントサイトのスキャフォールドです（[git-template](https://github.com/b4moss/git-template) の `doc-site` ブランチ）。

共通殻: ヘッダーユーティリティ（言語・カラーモード・モバイルメニュー・任意の GitHub）、フッター、サイドバー／ページャー、二言語 Content collection。

## クイックスタート

```bash
npm install
npm run dev
```

```bash
npm run generate
```

## カスタマイズ

| ファイル | 内容 |
| --- | --- |
| `nuxt.config.ts` → `runtimeConfig.public` | `siteName` / `siteVersion` / `githubUrl` / `footerText` |
| `app/config/docsNav.ts` | サイドバー／ページャー |
| `content/{ja,en}/` | Markdown 本文 |
| `i18n/locales/` | UI 文言（`nav.*` ラベル含む） |

## ライセンス

[MIT License](./LICENSE)
