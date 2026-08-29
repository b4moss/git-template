---
# =============================================================================
# JSON-LD sample (#40): installation
# Recommended @graph: WebPage + TechArticle + SoftwareSourceCode (site-wide)
# =============================================================================
#
# --- frontmatter (this file) ---
# title: string
#   → WebPage.name
#   → TechArticle.headline
#   → <title> / useSeoMeta.title
# description: string (optional)
#   → WebPage.description / TechArticle.description / meta description
#   Tip: mention prerequisites / supported environments for search snippets
# schemaRole: "TechArticle"
#   Install guides use TechArticle in the current standard set
#   (For HowTo-shaped steps, see tutorial.md; HowTo emission is reserved only)
#
# --- TechArticle auto-generated (do not author) ---
# @type "TechArticle" / @id "{pageUrl}#article" / headline←title
# isPartOf→WebPage / about→SoftwareSourceCode
#
# --- Copy-paste examples ---
# title: Install
# description: For Node.js 18+. Setup via npm / pnpm / bun
# schemaRole: TechArticle
#
title: Install
description: Dummy installation page (JSON-LD TechArticle sample)
schemaRole: TechArticle
---

# Install

Dummy installation page demonstrating `schemaRole: TechArticle`.

```bash
npm install your-package
```

Replace the steps with your product’s real install guide.
