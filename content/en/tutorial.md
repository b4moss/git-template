---
# =============================================================================
# 【このページで出したいもの】（#40 推奨）
#   @graph = WebPage + HowTo + SoftwareSourceCode
#   ※ いまは HowTo エンティティはまだ出ない（ロール予約のみ）
#     実際に出るのは WebPage + SoftwareSourceCode
# =============================================================================
#
# 【どこに何を書くか】
#
#   (A) OSS 情報     → site.meta.yaml の software.*
#   (B) ページの役割 → 下の schemaRole: HowTo
#       content.config.ts では受付済みだが、useJsonLd() は HowTo を積まない（未実装）
#   (C) 名前・説明   → 下の title / description → 現状は WebPage にだけ反映
#
# -----------------------------------------------------------------------------
# (B)(C) このファイル（↓が実体）
# -----------------------------------------------------------------------------
title: Tutorial
description: Dummy tutorial page (JSON-LD HowTo role reserved sample)
schemaRole: HowTo
#
#   将来 HowTo が出るようになったら、だいたいこうなる想定:
#   {
#     "@type": "HowTo",
#     "@id": "https://example.com/en/tutorial#howto",
#     "name": "Tutorial",                ← title
#     "description": "…",               ← description
#     "step": [ /* 本文の 1. 2. 3. から抽出（未実装）*/ ],
#     "isPartOf": { "@id": "https://example.com/en/tutorial" }
#   }
#
# -----------------------------------------------------------------------------
# いま実際に出る JSON-LD（イメージ）
# -----------------------------------------------------------------------------
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     { "@type": "WebPage", "@id": "https://example.com/en/tutorial", "name": "Tutorial" },
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

# Tutorial

Dummy tutorial page.

**出し方（現状）:** `schemaRole: HowTo` は書いておく（将来用）。JSON-LD に HowTo 本体はまだ出ません。OSS 情報は `site.meta.yaml`。

1. Clone the repository
2. Install dependencies
3. Start the dev server
