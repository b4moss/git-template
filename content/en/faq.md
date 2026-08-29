---
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
