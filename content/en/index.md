---
# JSON-LD sample (#40): OSS top
# Recommended: WebPage + SoftwareSourceCode (site-wide) only
# Omit schemaRole (no page-role schema)
title: Home
description: Scaffold for a Nuxt Content documentation site
# Examples (home usually omits schemaRole):
# title: Home
# description: Product documentation site
# schemaRole: TechArticle   # ← usually not used on the top page
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
