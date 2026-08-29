---
# =============================================================================
# What this page should emit (#40)
#   @graph = WebPage + TechArticle + SoftwareSourceCode
# =============================================================================
#
# Where to write what
#
#   (A) OSS info   → site.meta.yaml software.*
#   (B) Page role  → schemaRole: TechArticle
#   (C) Name/blurb → title / description
#
title: API reference
description: Dummy API reference page (JSON-LD TechArticle sample)
schemaRole: TechArticle
#
# Resulting JSON-LD (sketch):
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     { "@type": "WebPage", "@id": "https://example.com/en/api", "name": "API reference" },
#     {
#       "@type": "TechArticle",
#       "@id": "https://example.com/en/api#article",
#       "headline": "API reference",
#       "isPartOf": { "@id": "https://example.com/en/api" }
#     },
#     {
#       "@type": "SoftwareSourceCode",
#       "@id": "https://example.com/#software",
#       "name": "My OSS",
#       "codeRepository": "https://github.com/example/my-oss"
#     }
#   ]
# }
#
# No per-function schema.org types. Extra entities → #45 jsonLdExtra hatch.
# =============================================================================
---

# API reference

Dummy API page.

**Recipe:** `schemaRole: TechArticle` + `title` / `description` here, plus `software.*` in `site.meta.yaml`.

## `hello(name)`

| Arg | Type | Description |
| --- | --- | --- |
| `name` | `string` | Display name |

Returns: `string`

Replace with your real API docs.
