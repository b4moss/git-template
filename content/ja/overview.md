---
# =============================================================================
# 【このページで出したいもの】（#40 推奨）
#   @graph = WebPage + TechArticle + SoftwareSourceCode
#   ※ 1ページにスキーマを1つだけ、ではない。複数エンティティを @graph で並べる
# =============================================================================
#
# 【どこに何を書くか】覚えるのは次の3つだけ
#
#   (A) サイト共通の OSS 情報  →  プロジェクトルートの site.meta.yaml
#       全ページの SoftwareSourceCode になる（この Markdown には書かない）
#
#   (B) このページの「役割」  →  下の schemaRole
#       TechArticle を付けると TechArticle エンティティが追加される
#
#   (C) ページの名前・説明  →  下の title / description
#       WebPage.name と TechArticle.headline などに使われる
#
# -----------------------------------------------------------------------------
# (A) site.meta.yaml に書く例（一度書けば全ページ共通）
# -----------------------------------------------------------------------------
#   software:
#     name: My OSS
#     codeRepository: https://github.com/example/my-oss
#     license: MIT
#     programmingLanguage: [ TypeScript ]
#
#   ↓ こう出る（全ページ共通）
#   {
#     "@type": "SoftwareSourceCode",
#     "@id": "https://example.com/#software",
#     "name": "My OSS",
#     "codeRepository": "https://github.com/example/my-oss",
#     "license": "MIT",
#     "programmingLanguage": ["TypeScript"]
#   }
#
# -----------------------------------------------------------------------------
# (B)(C) このファイルの frontmatter に書くもの（↓が実体）
# -----------------------------------------------------------------------------
title: 概要
description: プロダクト概要のダミーページ（JSON-LD TechArticle サンプル）
schemaRole: TechArticle
#
#   title        → WebPage.name  かつ  TechArticle.headline
#   description  → WebPage.description  かつ  TechArticle.description（任意）
#   schemaRole   → "TechArticle" のときだけ TechArticle を @graph に追加
#
# -----------------------------------------------------------------------------
# 上を書くと、最終的に head へだいたいこう出る
# -----------------------------------------------------------------------------
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     {
#       "@type": "WebPage",
#       "@id": "https://example.com/ja/overview",
#       "url": "https://example.com/ja/overview",
#       "name": "概要",                          ← title
#       "description": "プロダクト概要の…",        ← description
#       "isPartOf": { "@id": "https://example.com/#website" },
#       "about": { "@id": "https://example.com/#software" }
#     },
#     {
#       "@type": "TechArticle",
#       "@id": "https://example.com/ja/overview#article",
#       "headline": "概要",                      ← title
#       "description": "プロダクト概要の…",        ← description
#       "isPartOf": { "@id": "https://example.com/ja/overview" },
#       "about": { "@id": "https://example.com/#software" }
#     },
#     {
#       "@type": "SoftwareSourceCode",
#       "@id": "https://example.com/#software",
#       "name": "My OSS",                        ← site.meta.yaml
#       "codeRepository": "https://github.com/…" ← site.meta.yaml
#     }
#   ]
# }
#
# 自動で付くもの（書かなくてよい）:
#   WebPage.@id / url … サイトURL + ロケール + パス
#   TechArticle.@id   … "{pageUrl}#article"
#   isPartOf / about  … @id 参照でエンティティ同士をつなぐ
# =============================================================================
---

# 概要

ダミーの概要ページです。

**出し方の要約:** `site.meta.yaml` で OSS 情報、この frontmatter で `schemaRole: TechArticle` と `title` / `description` を書く → `@graph` に WebPage + TechArticle + SoftwareSourceCode が出ます。

本文はプレースホルダです。実プロダクトの紹介文に差し替えてください。
