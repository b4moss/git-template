---
# =============================================================================
# 【このページで出したいもの】（#40 推奨）
#   @graph = WebPage + TechArticle + SoftwareSourceCode
#   （雛形の使い方ドキュメントも TechArticle 扱いでよい）
# =============================================================================
#
# 【どこに何を書くか】（全ページ共通のルール）
#
#   1ページ = 1スキーマ、ではない。
#   ページ本体は常に WebPage。役割を足すなら schemaRole。
#   OSS は site.meta.yaml → SoftwareSourceCode（全ページ共通）。
#   複数エンティティは @graph に並び、関係は @id でつなぐ。
#
#   | 出したいもの           | 書く場所                          | 書く内容                |
#   |------------------------|-----------------------------------|-------------------------|
#   | SoftwareSourceCode     | site.meta.yaml → software.*       | name, codeRepository…   |
#   | WebPage                | この frontmatter（自動＋手書き）  | title, description       |
#   | TechArticle / HowTo /  | この frontmatter の schemaRole    | TechArticle など        |
#   | FAQPage                | schemaRole: FAQPage + 本文 MDC    | ::faq-item{question=}   |
#
# -----------------------------------------------------------------------------
# このファイル（↓が実体）
# -----------------------------------------------------------------------------
title: Getting started
description: How to use this documentation site scaffold
schemaRole: TechArticle
#
# 出るもののイメージは overview.md / install.md と同じ（WebPage + TechArticle + SoftwareSourceCode）
# =============================================================================
---

# Getting started

## Dev server

```bash
npm install
npm run dev
```

## Static generate

```bash
npm run generate
```

Output goes to `.output/public`.

## Customization map

| Location | Purpose |
| --- | --- |
| `site.meta.yaml`（雛形は `.example`） | サイト名・URL・GitHub・**SoftwareSourceCode** |
| 各 Markdown の frontmatter | `title` / `description` / **`schemaRole`** |
| FAQ 本文の `::faq-item` | **FAQPage** の Question / Answer |
| `app/config/docsNav.ts` | サイドバー／ページャー |
| `i18n/locales/` | UI 文言（ナビラベル含む） |

## JSON-LD — 「何を書くと何が出るか」ダミー

各ファイル先頭のコメントに、**書く場所 → 出る `@graph`** の例があります。

| Page | 書くこと | 出る `@graph` |
| --- | --- | --- |
| [Home](./index.md) | `schemaRole` なし | WebPage + SoftwareSourceCode |
| [Overview](./overview.md) | `schemaRole: TechArticle` | WebPage + TechArticle + SoftwareSourceCode |
| [Install](./install.md) | 同上 | 同上 |
| [API](./api.md) | 同上 | 同上 |
| [Tutorial](./tutorial.md) | `schemaRole: HowTo` | 現状 WebPage + SoftwareSourceCode（HowTo は予約） |
| [FAQ](./faq.md) | `schemaRole: FAQPage` + `::faq-item` | WebPage + FAQPage + SoftwareSourceCode |
