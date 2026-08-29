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
description: よくある質問のサンプル（MDC アコーディオンと FAQPage JSON-LD）
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
#       "@id": "https://example.com/ja/faq",
#       "name": "FAQ",
#       "about": { "@id": "https://example.com/#software" }
#     },
#     {
#       "@type": "FAQPage",
#       "@id": "https://example.com/ja/faq#faq",
#       "isPartOf": { "@id": "https://example.com/ja/faq" },
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

このページは FAQ アコーディオンと `FAQPage` JSON-LD のサンプルです。

**出し方:** frontmatter で `schemaRole: FAQPage`、Q/A は下の `::faq-item`、OSS 情報は `site.meta.yaml`。

::faq-list
:::faq-item{question="site.meta.yaml はどこに置きますか？"}
プロジェクトルートに `site.meta.yaml.example` をコピーして `site.meta.yaml` を作成します。未作成の場合は example がフォールバックとして使われます。
:::

:::faq-item{question="JSON-LD はどのタイミングで決まりますか？"}
SSR / SSG のレンダ時に `useJsonLd()` が `@graph` を組み立て、`useHead` 経由で各ページの head に挿入します。
:::

:::faq-item{question="FAQ の Q/A はどう書けばよいですか？"}
`::faq-list` の中に `::faq-item{question="..."}` を並べます。回答はスロット本文（Markdown 可）です。コンポーネントが Q/A を収集し、`FAQPage` に変換します。
:::
::
