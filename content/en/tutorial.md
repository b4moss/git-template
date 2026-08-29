---
# =============================================================================
# What this page should emit (#40)
#   @graph = WebPage + HowTo + SoftwareSourceCode
#   Today HowTo is NOT emitted yet (role reserved only).
#   What actually appears: WebPage + SoftwareSourceCode
# =============================================================================
#
# Where to write what
#
#   (A) OSS info   → site.meta.yaml software.*
#   (B) Page role  → schemaRole: HowTo (accepted, but useJsonLd does not push HowTo yet)
#   (C) Name/blurb → title / description → WebPage only for now
#
title: Tutorial
description: Dummy tutorial page (JSON-LD HowTo role reserved sample)
schemaRole: HowTo
#
# Planned HowTo shape (not emitted yet):
#   {
#     "@type": "HowTo",
#     "@id": "https://example.com/en/tutorial#howto",
#     "name": "Tutorial",
#     "step": [ /* from body steps — not implemented */ ]
#   }
#
# What you get today (sketch):
# {
#   "@graph": [
#     { "@type": "WebPage", "@id": "https://example.com/en/tutorial", "name": "Tutorial" },
#     { "@type": "SoftwareSourceCode", "@id": "https://example.com/#software", "name": "My OSS" }
#   ]
# }
# =============================================================================
---

# Tutorial

Dummy tutorial page.

**Recipe (today):** keep `schemaRole: HowTo` for the future; HowTo body is not in JSON-LD yet. OSS meta still comes from `site.meta.yaml`.

1. Clone the repository
2. Install dependencies
3. Start the dev server
