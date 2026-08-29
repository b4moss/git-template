---
title: Getting started
description: How to use this documentation site scaffold
schemaRole: TechArticle
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
| `site.meta.yaml` (from `.example`) | Site name, URL, GitHub, SoftwareSourceCode meta |
| `nuxt.config.ts` | Loads YAML into `runtimeConfig.public`, prerender routes |
| `app/config/docsNav.ts` | Sidebar / pager |
| `content/{ja,en}/` | Markdown pages (`schemaRole` for JSON-LD role) |
| `i18n/locales/` | UI copy (including nav labels) |

## JSON-LD

- Set frontmatter `schemaRole` to `TechArticle`, `FAQPage`, or `HowTo` (reserved)
- Each page gets `WebPage` + optional role + `SoftwareSourceCode` in `@graph`
- For FAQ markup, see [FAQ](./faq.md) (`::faq-list` / `::faq-item`)
