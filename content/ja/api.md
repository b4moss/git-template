---
# =============================================================================
# 【このページで出したいもの】（#40 推奨）
#   @graph = WebPage + TechArticle + SoftwareSourceCode
# =============================================================================
#
# 【どこに何を書くか】
#
#   (A) OSS 情報     → site.meta.yaml の software.*（全ページ共通）
#   (B) ページの役割 → 下の schemaRole: TechArticle
#   (C) 名前・説明   → 下の title / description
#
# -----------------------------------------------------------------------------
# (B)(C) このファイル（↓が実体）
# -----------------------------------------------------------------------------
title: API リファレンス
description: API リファレンスのダミーページ（JSON-LD TechArticle サンプル）
schemaRole: TechArticle
#
#   title        → WebPage.name / TechArticle.headline
#   description  → WebPage.description / TechArticle.description
#   schemaRole   → TechArticle を @graph に追加
#
# -----------------------------------------------------------------------------
# 出る JSON-LD（イメージ）
# -----------------------------------------------------------------------------
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     { "@type": "WebPage", "@id": "https://example.com/ja/api", "name": "API リファレンス" },
#     {
#       "@type": "TechArticle",
#       "@id": "https://example.com/ja/api#article",
#       "headline": "API リファレンス",
#       "isPartOf": { "@id": "https://example.com/ja/api" }
#     },
#     {
#       "@type": "SoftwareSourceCode",
#       "@id": "https://example.com/#software",
#       "name": "My OSS",
#       "codeRepository": "https://github.com/example/my-oss"
#     }
#   ]
# }
#
# 関数ごとの schema.org 型は出さない。追加したい場合は #45 の jsonLdExtra ハッチへ
# =============================================================================
---

# API リファレンス

ダミーの API ページです。

**出し方:** `schemaRole: TechArticle` + `title` / `description`（このファイル）と `site.meta.yaml` の `software.*`。

## `hello(name)`

| 引数 | 型 | 説明 |
| --- | --- | --- |
| `name` | `string` | 表示名 |

戻り値: `string`

実 API に合わせて差し替えてください。
