---
# =============================================================================
# What this page should emit (#40)
#   @graph = WebPage + FAQPage + SoftwareSourceCode
# =============================================================================
#
# Where to write what (four places)
#
#   (A) OSS info       → site.meta.yaml software.*
#   (B) Page role      → schemaRole: FAQPage  (required to emit FAQPage)
#   (C) Page name/blurb→ title / description → WebPage
#   (D) Q/A content    → body MDC (not frontmatter)
#
title: FAQ
description: Sample FAQ page (MDC accordion and FAQPage JSON-LD)
schemaRole: FAQPage
#
# (D) In the body below, write:
#   ::faq-list
#   :::faq-item{question="Put the question here"}
#   Put the answer here (Markdown ok)
#   :::
#   ::
#
#   question="…" → Question.name
#   slot body    → Answer.text
#
# Resulting JSON-LD (sketch):
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     { "@type": "WebPage", "@id": "https://example.com/en/faq", "name": "FAQ" },
#     {
#       "@type": "FAQPage",
#       "@id": "https://example.com/en/faq#faq",
#       "mainEntity": [
#         {
#           "@type": "Question",
#           "name": "Put the question here",
#           "acceptedAnswer": { "@type": "Answer", "text": "Put the answer here…" }
#         }
#       ]
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

# FAQ

This page demonstrates the FAQ accordion and `FAQPage` JSON-LD.

**Recipe:** frontmatter `schemaRole: FAQPage`, Q/A via `::faq-item` below, OSS meta in `site.meta.yaml`.

::faq-list
:::faq-item{question="Where do I put site.meta.yaml?"}
Copy `site.meta.yaml.example` to `site.meta.yaml` at the project root. If the file is missing, the example is used as a fallback.
:::

:::faq-item{question="When is JSON-LD finalized?"}
During SSR / SSG render, `useJsonLd()` builds the `@graph` and injects it into each page head via `useHead`.
:::

:::faq-item{question="How do I author FAQ Q/A pairs?"}
Nest `::faq-item{question="..."}` blocks inside `::faq-list`. Answers go in the slot body (Markdown allowed). Components collect the pairs and convert them to `FAQPage`.
:::
::
