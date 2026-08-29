---
# =============================================================================
# JSON-LD サンプル（#40）: 技術文書（雛形の使い方）
# 推奨 @graph: WebPage + TechArticle + SoftwareSourceCode（サイト共通）
# =============================================================================
#
# --- frontmatter（このファイル）---
# title: string
#   → WebPage.name / TechArticle.headline / <title>
# description: string（任意）
#   → WebPage.description / TechArticle.description / meta description
# schemaRole: "TechArticle"
#   取りうる値: TechArticle | HowTo | FAQPage（content.config.ts）
#
# --- プロパティ対応（現状 useJsonLd が実際に出すもの）---
# WebPage
#   @type / @id / url / name←title / description? / isPartOf / about
# TechArticle（schemaRole=TechArticle のとき）
#   @type / @id="{pageUrl}#article" / headline←title / description?
#   isPartOf→WebPage / about→SoftwareSourceCode
# SoftwareSourceCode（全ページ・site.meta.yaml）
#   @id="{siteUrl}/#software" / name / codeRepository / license? / programmingLanguage?
#
# --- 記述例（コピー用）---
# title: はじめに
# description: ドキュメントサイト雛形の使い方
# schemaRole: TechArticle
#
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
- 役割別ダミー（frontmatter にプロパティ対応表あり）: [概要](./overview.md) / [インストール](./install.md) / [API](./api.md) / [チュートリアル](./tutorial.md) / [FAQ](./faq.md)
