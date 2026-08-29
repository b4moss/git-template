---
# =============================================================================
# What this page should emit (#40)
#   @graph = WebPage + TechArticle + SoftwareSourceCode
#   Not “one schema per page” — multiple entities in @graph
# =============================================================================
#
# Where to write what (only three places)
#
#   (A) Site-wide OSS info → project-root site.meta.yaml → SoftwareSourceCode
#   (B) Page role          → schemaRole below → adds TechArticle
#   (C) Name / blurb       → title / description below → WebPage + TechArticle fields
#
# (A) site.meta.yaml:
#   software:
#     name: My OSS
#     codeRepository: https://github.com/example/my-oss
#
title: Overview
description: Dummy overview page (JSON-LD TechArticle sample)
schemaRole: TechArticle
#
#   title        → WebPage.name and TechArticle.headline
#   description  → WebPage.description and TechArticle.description
#   schemaRole   → adds TechArticle to @graph when set to TechArticle
#
# Resulting JSON-LD (sketch):
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     {
#       "@type": "WebPage",
#       "@id": "https://example.com/en/overview",
#       "name": "Overview",
#       "about": { "@id": "https://example.com/#software" }
#     },
#     {
#       "@type": "TechArticle",
#       "@id": "https://example.com/en/overview#article",
#       "headline": "Overview",
#       "isPartOf": { "@id": "https://example.com/en/overview" }
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

# Overview

Dummy overview page.

**Recipe:** `site.meta.yaml` for OSS meta; this frontmatter for `schemaRole: TechArticle` plus `title` / `description` → `@graph` gets WebPage + TechArticle + SoftwareSourceCode.

Replace this body with your product introduction.
