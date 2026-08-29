---
# =============================================================================
# What this page should emit (#40)
#   @graph = WebPage + TechArticle + SoftwareSourceCode
# =============================================================================
#
# Shared rule (every docs page)
#
#   Not one schema per page.
#   Page itself = WebPage. Add a role via schemaRole.
#   OSS = site.meta.yaml → SoftwareSourceCode (site-wide).
#   Entities sit in @graph and link via @id.
#
#   | Want this              | Write it here                         | What to write              |
#   |------------------------|---------------------------------------|----------------------------|
#   | SoftwareSourceCode     | site.meta.yaml → software.*           | name, codeRepository, …    |
#   | WebPage                | this frontmatter                      | title, description         |
#   | TechArticle / HowTo /… | schemaRole                            | TechArticle etc.           |
#   | FAQPage                | schemaRole: FAQPage + body MDC        | ::faq-item{question=}      |
#
title: Getting started
description: How to use this documentation site scaffold
schemaRole: TechArticle
#
# Same shape as overview.md / install.md (WebPage + TechArticle + SoftwareSourceCode)
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
| `site.meta.yaml` (from `.example`) | Site name, URL, GitHub, **SoftwareSourceCode** |
| Each Markdown frontmatter | `title` / `description` / **`schemaRole`** |
| FAQ body `::faq-item` | **FAQPage** Question / Answer |
| `app/config/docsNav.ts` | Sidebar / pager |
| `i18n/locales/` | UI copy (including nav labels) |

## JSON-LD — write X → get Y samples

Each sample file’s frontmatter comments show **where to write → resulting `@graph`**.

| Page | What you write | Resulting `@graph` |
| --- | --- | --- |
| [Home](./index.md) | no `schemaRole` | WebPage + SoftwareSourceCode |
| [Overview](./overview.md) | `schemaRole: TechArticle` | WebPage + TechArticle + SoftwareSourceCode |
| [Install](./install.md) | same | same |
| [API](./api.md) | same | same |
| [Tutorial](./tutorial.md) | `schemaRole: HowTo` | WebPage + SoftwareSourceCode for now (HowTo reserved) |
| [FAQ](./faq.md) | `schemaRole: FAQPage` + `::faq-item` | WebPage + FAQPage + SoftwareSourceCode |
