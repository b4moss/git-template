---
# =============================================================================
# JSON-LD sample (#40): FAQ
# Recommended @graph: WebPage + FAQPage + SoftwareSourceCode (site-wide)
# Q/A bodies live in MDC (::faq-list / ::faq-item), not frontmatter
# =============================================================================
#
# --- frontmatter (this file) ---
# title: string
#   → WebPage.name / <title>
#   (FAQPage itself has no name field today)
# description: string (optional)
#   → WebPage.description / meta description
# schemaRole: "FAQPage" (effectively required to emit FAQPage)
#   → Q/A from extractFaqFromBody + useFaqItems → FAQPage.mainEntity
#
# --- FAQPage auto-generated (do not author) ---
# FAQPage.@type       … "FAQPage"
# FAQPage.@id         … "{pageUrl}#faq"
# FAQPage.isPartOf    … { "@id": pageUrl }
# FAQPage.mainEntity  … Question[] (duplicate questions are skipped)
#
# --- MDC properties (body) ---
# ::faq-list
#   Container: expand/collapse UI + registration target for child FaqItems
# :::faq-item{question="Question text"}
#   question (attribute, string, effectively required)
#     → Question.name
#     → accordion heading
#   slot body (Markdown allowed)
#     → Answer.text (plain-textified into JSON-LD)
#     → accordion body
# :::
# ::
#
# --- Question / Answer mapping today ---
# Question.@type = "Question"
# Question.name  ← faq-item.question
# Answer.@type   = "Answer"
# Answer.text    ← faq-item body
# (Question.@id / Answer.url are not emitted)
#
# --- Copy-paste examples ---
# title: FAQ
# description: Common questions on setup, config, and troubleshooting
# schemaRole: FAQPage
#
title: FAQ
description: Sample FAQ page (MDC accordion and FAQPage JSON-LD)
schemaRole: FAQPage
---

# FAQ

This page demonstrates the FAQ accordion and `FAQPage` JSON-LD.

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
