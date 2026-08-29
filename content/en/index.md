---
# =============================================================================
# What this page should emit (#40)
#   @graph = WebPage + SoftwareSourceCode
#   No page-role schema on the top page (no TechArticle etc.)
# =============================================================================
#
# Where to write what
#
#   (A) Site-wide OSS info  → site.meta.yaml → SoftwareSourceCode on every page
#   (B) Page role           → omit schemaRole
#   (C) Page name / blurb   → title / description below → WebPage only
#
# (A) site.meta.yaml example:
#   software:
#     name: My OSS
#     codeRepository: https://github.com/example/my-oss
#
title: Home
description: Scaffold for a Nuxt Content documentation site
# Do not set schemaRole here — adding it would inject TechArticle etc.
#
# Resulting JSON-LD (sketch):
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     {
#       "@type": "WebPage",
#       "@id": "https://example.com/en",
#       "name": "Home",
#       "about": { "@id": "https://example.com/#software" }
#     },
#     {
#       "@type": "SoftwareSourceCode",
#       "@id": "https://example.com/#software",
#       "name": "My OSS",
#       "codeRepository": "https://github.com/example/my-oss"
#     }
#   ]
# }
# =============================================================================
---

# Doc Site

This branch is a Nuxt Content documentation site starter.

## Next steps

1. Copy `site.meta.yaml.example` to `site.meta.yaml` and set site variables
2. Edit sidebar / pager entries in `app/config/docsNav.ts`
3. Add Markdown under `content/{ja,en}/` (set `schemaRole` when needed)
4. Keep `nav.*` labels in `i18n/locales/` in sync

## JSON-LD dummy pages (#40) — write X → get Y

| Page | What you write | Resulting `@graph` |
| --- | --- | --- |
| This page (top) | no `schemaRole` + `site.meta.yaml` | WebPage + SoftwareSourceCode |
| [Overview](./overview.md) | `schemaRole: TechArticle` | WebPage + TechArticle + SoftwareSourceCode |
| [Install](./install.md) | `schemaRole: TechArticle` | same |
| [API](./api.md) | `schemaRole: TechArticle` | same |
| [Tutorial](./tutorial.md) | `schemaRole: HowTo` (reserved) | WebPage + SoftwareSourceCode for now |
| [FAQ](./faq.md) | `schemaRole: FAQPage` + `::faq-item` | WebPage + FAQPage + SoftwareSourceCode |

See [Getting started](./getting-started.md) for details.
