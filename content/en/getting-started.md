---
# =============================================================================
# JSON-LD sample (#40): technical article (scaffold guide)
# Recommended @graph: WebPage + TechArticle + SoftwareSourceCode (site-wide)
# =============================================================================
#
# --- frontmatter (this file) ---
# title: string
#   → WebPage.name / TechArticle.headline / <title>
# description: string (optional)
#   → WebPage.description / TechArticle.description / meta description
# schemaRole: "TechArticle"
#   Allowed: TechArticle | HowTo | FAQPage (content.config.ts)
#
# --- Property mapping (what useJsonLd emits today) ---
# WebPage
#   @type / @id / url / name←title / description? / isPartOf / about
# TechArticle (when schemaRole=TechArticle)
#   @type / @id="{pageUrl}#article" / headline←title / description?
#   isPartOf→WebPage / about→SoftwareSourceCode
# SoftwareSourceCode (every page; from site.meta.yaml)
#   @id="{siteUrl}/#software" / name / codeRepository / license? / programmingLanguage?
#
# --- Copy-paste examples ---
# title: Getting started
# description: How to use this documentation site scaffold
# schemaRole: TechArticle
#
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
- Role samples (with property maps in frontmatter): [Overview](./overview.md) / [Install](./install.md) / [API](./api.md) / [Tutorial](./tutorial.md) / [FAQ](./faq.md)
