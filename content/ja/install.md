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
# (A) の書き方・出方は overview.md / site.meta.yaml.example を参照
#
# -----------------------------------------------------------------------------
# (B)(C) このファイル（↓が実体）
# -----------------------------------------------------------------------------
title: インストール
description: インストール手順のダミーページ（JSON-LD TechArticle サンプル）
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
#     {
#       "@type": "WebPage",
#       "@id": "https://example.com/ja/install",
#       "name": "インストール",
#       "about": { "@id": "https://example.com/#software" }
#     },
#     {
#       "@type": "TechArticle",
#       "@id": "https://example.com/ja/install#article",
#       "headline": "インストール",
#       "isPartOf": { "@id": "https://example.com/ja/install" }
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
# 手順そのものを HowTo にしたい場合は tutorial.md（HowTo は現状ロール予約のみ）
# =============================================================================
---

# インストール

ダミーのインストールページです。

**出し方:** `schemaRole: TechArticle` + `title` / `description`（このファイル）と `site.meta.yaml` の `software.*`。

```bash
npm install your-package
```

手順の詳細はプロダクトに合わせて書き換えてください。
