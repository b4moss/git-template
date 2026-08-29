---
# JSON-LD sample (#40): technical article (scaffold guide)
# Recommended: WebPage + TechArticle + SoftwareSourceCode (site-wide)
title: Getting started
description: How to use this documentation site scaffold
schemaRole: TechArticle
# Examples:
# schemaRole: TechArticle
# title: Getting started
# description: How to use this documentation site scaffold
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
- Role samples: [Overview](./overview.md) / [Install](./install.md) / [API](./api.md) / [Tutorial](./tutorial.md) / [FAQ](./faq.md)
