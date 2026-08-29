---
# =============================================================================
# JSON-LD sample (#40): API reference
# Recommended @graph: WebPage + TechArticle + SoftwareSourceCode (site-wide)
# =============================================================================
#
# --- frontmatter (this file) ---
# title: string
#   → WebPage.name / TechArticle.headline / <title>
# description: string (optional)
#   → WebPage.description / TechArticle.description / meta description
#   Tip: include language / major version for clearer snippets
# schemaRole: "TechArticle"
#   Standard role for API reference. No per-function schema.org types
#
# --- Properties mapped into TechArticle today ---
# headline     ← title
# description  ← description (optional)
# @id          ← "{pageUrl}#article" (auto)
# isPartOf     ← WebPage @id (auto)
# about        ← SoftwareSourceCode @id (auto)
#
# --- Not emitted from frontmatter yet (use #45 jsonLdExtra or helper extension) ---
# # datePublished / dateModified / author / version, etc.
#
# --- Copy-paste examples ---
# title: API reference
# description: Public API list and signatures (v1)
# schemaRole: TechArticle
#
title: API reference
description: Dummy API reference page (JSON-LD TechArticle sample)
schemaRole: TechArticle
---

# API reference

Dummy API page demonstrating `schemaRole: TechArticle`.

## `hello(name)`

| Arg | Type | Description |
| --- | --- | --- |
| `name` | `string` | Display name |

Returns: `string`

Replace with your real API docs.
