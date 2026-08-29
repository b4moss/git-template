---
# =============================================================================
# JSON-LD サンプル（#40）: FAQ
# 推奨 @graph: WebPage + FAQPage + SoftwareSourceCode（サイト共通）
# Q/A 本体は frontmatter ではなく MDC（::faq-list / ::faq-item）
# =============================================================================
#
# --- frontmatter（このファイル）---
# title: string
#   → WebPage.name / <title>
#   （FAQPage 自体の name は現状出さない）
# description: string（任意）
#   → WebPage.description / meta description
# schemaRole: "FAQPage"（必須相当・これがないと FAQPage エンティティを出さない）
#   → extractFaqFromBody + useFaqItems で集めた Q/A を FAQPage.mainEntity へ
#
# --- FAQPage 自動生成（書かない）---
# FAQPage.@type       … "FAQPage"
# FAQPage.@id         … "{pageUrl}#faq"
# FAQPage.isPartOf    … { "@id": pageUrl }
# FAQPage.mainEntity  … Question[]（重複 question はスキップ）
#
# --- MDC 側のプロパティ（本文）---
# ::faq-list
#   コンテナ。開閉 UI（全部開く/閉じる）と子 FaqItem の登録先
# :::faq-item{question="質問文"}
#   question（属性, string, 必須相当）
#     → Question.name
#     → アコーディオン見出し
#   スロット本文（Markdown 可）
#     → Answer.text（プレーンテキスト化して JSON-LD へ）
#     → アコーディオン本文
# :::
# ::
#
# --- Question / Answer に現状マップされるもの ---
# Question.@type = "Question"
# Question.name  ← faq-item.question
# Answer.@type   = "Answer"
# Answer.text    ← faq-item 本文
# （Question.@id / Answer.url などは未出力）
#
# --- 記述例（コピー用）---
# title: FAQ
# description: 導入・設定・トラブルシュートのよくある質問
# schemaRole: FAQPage
#
title: FAQ
description: よくある質問のサンプル（MDC アコーディオンと FAQPage JSON-LD）
schemaRole: FAQPage
---

# FAQ

このページは FAQ アコーディオンと `FAQPage` JSON-LD のサンプルです。

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
