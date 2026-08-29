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
title: Install
description: Dummy installation page (JSON-LD TechArticle sample)
schemaRole: TechArticle
#
# Resulting JSON-LD (sketch):
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     { "@type": "WebPage", "@id": "https://example.com/en/install", "name": "Install" },
#     {
#       "@type": "TechArticle",
#       "@id": "https://example.com/en/install#article",
#       "headline": "Install",
#       "isPartOf": { "@id": "https://example.com/en/install" }
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
# For HowTo-shaped steps see tutorial.md (HowTo emission still reserved).
# =============================================================================
---

# Install

Dummy installation page.

**Recipe:** `schemaRole: TechArticle` + `title` / `description` here, plus `software.*` in `site.meta.yaml`.

```bash
npm install your-package
```

Replace the steps with your product’s real install guide.
