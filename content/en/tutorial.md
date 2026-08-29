---
# =============================================================================
# JSON-LD sample (#40): tutorial
# Recommended @graph: WebPage + HowTo + SoftwareSourceCode (site-wide)
# Note: HowTo entity emission is reserved only (no step extraction yet)
# =============================================================================
#
# --- frontmatter (this file) ---
# title: string
#   → WebPage.name / <title>
#   → (future) HowTo.name
# description: string (optional)
#   → WebPage.description / meta description
#   → (future) HowTo.description
# schemaRole: "HowTo"
#   Accepted in content.config.ts
#   useJsonLd() does not push HowTo into @graph yet (WebPage + SoftwareSourceCode only)
#
# --- Planned HowTo properties (authoring them does not emit JSON-LD today) ---
# # howTo.name / howTo.description     ← from title / description
# # howTo.@id                          ← "{pageUrl}#howto" (planned)
# # howTo.isPartOf                     ← WebPage
# # howTo.about                        ← SoftwareSourceCode
# # howTo.step[]                       ← extracted from body steps (not implemented)
# #   HowToStep.name / text / position / url, etc.
# # howTo.totalTime / tool / supply    ← unsupported (raw insert via #45 hatch)
#
# --- Copy-paste examples ---
# title: First-time setup
# description: From clone to dev server (about 5 minutes)
# schemaRole: HowTo
#
title: Tutorial
description: Dummy tutorial page (JSON-LD HowTo role reserved sample)
schemaRole: HowTo
---

# Tutorial

Dummy tutorial page with frontmatter `schemaRole: HowTo`.

`HowTo` is reserved for now: the role is accepted, but HowTo entities are not emitted yet (`WebPage` + `SoftwareSourceCode` still are).

1. Clone the repository
2. Install dependencies
3. Start the dev server
