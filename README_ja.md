> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# doc-site

Nuxt Content ドキュメントサイトのスキャフォールドです（[git-template](https://github.com/b4moss/git-template) の `doc-site` ブランチ）。

共通殻: ヘッダーユーティリティ（言語・カラーモード・モバイルメニュー・任意の GitHub）、フッター、サイドバー／ページャー、二言語 Content collection、JSON-LD ヘルパ、FAQ アコーディオン。

## クイックスタート

```bash
npm install
cp site.meta.yaml.example site.meta.yaml   # 任意（未作成時は example がフォールバック）
npm run dev
```

```bash
npm run generate
```

## カスタマイズ

| ファイル | 内容 |
| --- | --- |
| `site.meta.yaml`（雛形は `site.meta.yaml.example`） | サイト名・URL・GitHub・SoftwareSourceCode → `runtimeConfig.public` |
| `nuxt.config.ts` | YAML 取り込み、モジュール、prerender ルート |
| `app/config/docsNav.ts` | サイドバー／ページャー |
| `content/{ja,en}/` | Markdown 本文（`schemaRole`: `TechArticle` / `FAQPage` / `HowTo`） |
| `::faq-list` / `::faq-item` | FAQ アコーディオン + `FAQPage` JSON-LD（`content/*/faq.md` 参照） |
| `i18n/locales/` | UI 文言（`nav.*` ラベル含む） |
| `server/routes/sitemap.xml.get.ts` | `docsNav` + ロケールから sitemap（`siteUrl` は YAML） |
| `server/routes/robots.txt.get.ts` | `/sitemap.xml` を案内 |

## ライセンス

[MIT License](./LICENSE)
