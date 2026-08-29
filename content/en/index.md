---
# =============================================================================
# JSON-LD sample (#40): OSS top
# Recommended @graph: WebPage + SoftwareSourceCode (site-wide)
# Omit schemaRole (no page-role schema)
# =============================================================================
#
# --- frontmatter (this file) ---
# title: string (effectively required)
#   → WebPage.name
#   → <title> / useSeoMeta.title
# description: string (optional)
#   → WebPage.description (omitted from JSON-LD if unset)
#   → meta description
# schemaRole: omit on the home page
#   Allowed values: TechArticle | HowTo | FAQPage (content.config.ts)
#   Setting it adds a role entity; usually unwanted on the top page
#
# --- Auto-generated (do not author) ---
# WebPage.@context     … root "@context": "https://schema.org"
# WebPage.@type        … "WebPage"
# WebPage.@id          … {siteUrl}/{locale}{path}  (e.g. https://example.com/en)
# WebPage.url          … same as @id
# WebPage.isPartOf     … { "@id": "{siteUrl}/#website" }  (WebSite entity via #45 etc.)
# WebPage.about        … { "@id": "{siteUrl}/#software" }
#
# --- Site-wide site.meta.yaml → SoftwareSourceCode ---
# software.name                 → name (falls back to siteName)
# software.codeRepository       → codeRepository (falls back to githubUrl)
# software.license              → license (e.g. MIT)
# software.programmingLanguage  → string[] (may be empty)
# SoftwareSourceCode.@id        … "{siteUrl}/#software" (fixed)
#
# --- Copy-paste examples (leave commented) ---
# title: Home
# description: Product documentation site
# # schemaRole: TechArticle   # ← usually not used on the top page
#
title: Home
description: Scaffold for a Nuxt Content documentation site
---

# Doc Site

This branch is a Nuxt Content documentation site starter.

## Next steps

1. Copy `site.meta.yaml.example` to `site.meta.yaml` and set site variables
2. Edit sidebar / pager entries in `app/config/docsNav.ts`
3. Add Markdown under `content/{ja,en}/` (set `schemaRole` when needed)
4. Keep `nav.*` labels in `i18n/locales/` in sync

## JSON-LD dummy pages (#40)

| Page | `schemaRole` |
| --- | --- |
| [Overview](./overview.md) | `TechArticle` |
| [Install](./install.md) | `TechArticle` |
| [API](./api.md) | `TechArticle` |
| [Tutorial](./tutorial.md) | `HowTo` (reserved) |
| [FAQ](./faq.md) | `FAQPage` |

See [Getting started](./getting-started.md) for details.
