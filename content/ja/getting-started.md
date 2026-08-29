---
title: はじめに
description: ドキュメントサイト雛形の使い方
schemaRole: TechArticle
---

# はじめに

## 開発サーバ

```bash
npm install
npm run dev
```

## 静的生成

```bash
npm run generate
```

出力は `.output/public` です。

## カスタマイズ要点

| 場所 | 内容 |
| --- | --- |
| `site.meta.yaml`（雛形は `.example`） | サイト名・URL・GitHub・SoftwareSourceCode 用メタ |
| `nuxt.config.ts` | YAML 取り込み、`runtimeConfig.public`、prerender ルート |
| `app/config/docsNav.ts` | サイドバー／ページャー |
| `content/{ja,en}/` | Markdown 本文（`schemaRole` で JSON-LD 役割） |
| `i18n/locales/` | UI 文言（ナビラベル含む） |

## JSON-LD

- frontmatter の `schemaRole` に `TechArticle` / `FAQPage` / `HowTo`（予約）を指定できます
- 各ページに `WebPage` +（任意の役割）+ `SoftwareSourceCode` が `@graph` で入ります
- FAQ は [FAQ](./faq.md) の `::faq-list` / `::faq-item` を参照
