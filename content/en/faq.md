---
# =============================================================================
# 【このページで出したいもの】（#40 推奨）
#   @graph = WebPage + FAQPage + SoftwareSourceCode
# =============================================================================
#
# 【どこに何を書くか】覚えるのは次の4つ
#
#   (A) OSS 情報         → site.meta.yaml の software.*（全ページ共通）
#   (B) ページの役割     → 下の schemaRole: FAQPage  （これがないと FAQPage が出ない）
#   (C) ページ名・説明   → 下の title / description → WebPage 用
#   (D) 質問と回答の中身 → 本文の MDC（frontmatter には書かない）
#
# -----------------------------------------------------------------------------
# (B)(C) このファイルの frontmatter（↓が実体）
# -----------------------------------------------------------------------------
title: FAQ
description: Sample FAQ page (MDC accordion and FAQPage JSON-LD)
schemaRole: FAQPage
#
# -----------------------------------------------------------------------------
# (D) 本文にこう書く（このファイルの下のほう）
# -----------------------------------------------------------------------------
#   ::faq-list
#   :::faq-item{question="質問文はここに書く"}
#   回答文はここに書く（Markdown 可）
#   :::
#   ::
#
#   question="…"  → Question.name（アコーディオン見出しにもなる）
#   スロット本文   → Answer.text（JSON-LD ではプレーンテキスト化）
#
# -----------------------------------------------------------------------------
# 出る JSON-LD（イメージ）
# -----------------------------------------------------------------------------
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     {
#       "@type": "WebPage",
#       "@id": "https://example.com/en/faq",
#       "name": "FAQ",
#       "about": { "@id": "https://example.com/#software" }
#     },
#     {
#       "@type": "FAQPage",
#       "@id": "https://example.com/en/faq#faq",
#       "isPartOf": { "@id": "https://example.com/en/faq" },
#       "mainEntity": [
#         {
#           "@type": "Question",
#           "name": "質問文はここに書く",
#           "acceptedAnswer": {
#             "@type": "Answer",
#             "text": "回答文はここに書く…"
#           }
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

**出し方:** frontmatter で `schemaRole: FAQPage`、Q/A は下の `::faq-item`、OSS 情報は `site.meta.yaml`。

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
