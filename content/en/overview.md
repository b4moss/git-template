---
# =============================================================================
# JSON-LD sample (#40): product overview
# Recommended @graph: WebPage + TechArticle + SoftwareSourceCode (site-wide)
# =============================================================================
#
# --- frontmatter (this file) ---
# title: string
#   → WebPage.name
#   → TechArticle.headline
#   → <title> / useSeoMeta.title
# description: string (optional)
#   → WebPage.description
#   → TechArticle.description
#   → meta description
# schemaRole: "TechArticle" (recommended for this page type)
#   → adds a TechArticle entity to @graph
#   Alternatives: HowTo | FAQPage (only when the page role differs)
#
# --- TechArticle auto-generated (do not author) ---
# TechArticle.@type     … "TechArticle"
# TechArticle.@id       … "{pageUrl}#article"
# TechArticle.headline  … same as title
# TechArticle.isPartOf  … { "@id": pageUrl }  (parent WebPage)
# TechArticle.about     … { "@id": "{siteUrl}/#software" }
#
# --- WebPage / SoftwareSourceCode ---
# WebPage is on every page (@id/url/name/isPartOf/about + optional description)
# SoftwareSourceCode comes from site.meta.yaml software.* (see index.md / .example)
#
# --- Copy-paste examples ---
# title: Overview
# description: Short product blurb (used for search + JSON-LD)
# schemaRole: TechArticle
#
title: Overview
description: Dummy overview page (JSON-LD TechArticle sample)
schemaRole: TechArticle
---

# Overview

Dummy overview page. Frontmatter `schemaRole: TechArticle` yields `WebPage` + `TechArticle` + `SoftwareSourceCode` in JSON-LD.

Replace this body with your product introduction.
