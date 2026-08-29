---
# =============================================================================
# 【このページで出したいもの】（#40 推奨）
#   @graph = WebPage + SoftwareSourceCode
#   ※ トップは「役割」スキーマを付けない（TechArticle 等なし）
# =============================================================================
#
# 【どこに何を書くか】
#
#   (A) サイト共通の OSS 情報  →  site.meta.yaml（全ページの SoftwareSourceCode）
#   (B) このページの役割      →  schemaRole は書かない（省略）
#   (C) ページの名前・説明    →  下の title / description → WebPage のみに使われる
#
# -----------------------------------------------------------------------------
# (A) site.meta.yaml の例 → SoftwareSourceCode（全ページ共通）
# -----------------------------------------------------------------------------
#   software:
#     name: My OSS
#     codeRepository: https://github.com/example/my-oss
#
# -----------------------------------------------------------------------------
# (B)(C) このファイルに書くもの（↓が実体）
# -----------------------------------------------------------------------------
title: Home
description: Scaffold for a Nuxt Content documentation site
# schemaRole は書かない  ← 書くと TechArticle 等が追加されるのでトップでは通常不要
#
#   title        → WebPage.name
#   description  → WebPage.description（任意）
#   schemaRole   → なし → WebPage + SoftwareSourceCode だけ
#
# -----------------------------------------------------------------------------
# 出る JSON-LD（イメージ）
# -----------------------------------------------------------------------------
# {
#   "@context": "https://schema.org",
#   "@graph": [
#     {
#       "@type": "WebPage",
#       "@id": "https://example.com/en",
#       "url": "https://example.com/en",
#       "name": "Home",
#       "description": "Scaffold for …",
#       "about": { "@id": "https://example.com/#software" }
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

# Doc Site

This branch is a Nuxt Content documentation site starter.

## Next steps

1. Copy `site.meta.yaml.example` to `site.meta.yaml` and set site variables
2. Edit sidebar / pager entries in `app/config/docsNav.ts`
3. Add Markdown under `content/{ja,en}/` (set `schemaRole` when needed)
4. Keep `nav.*` labels in `i18n/locales/` in sync

## JSON-LD ダミーページ（#40）— 何を書くと何が出るか

| Page | 書く場所の要点 | 出る `@graph` |
| --- | --- | --- |
| This page (top) | `schemaRole` なし + `site.meta.yaml` | WebPage + SoftwareSourceCode |
| [Overview](./overview.md) | `schemaRole: TechArticle` | WebPage + TechArticle + SoftwareSourceCode |
| [Install](./install.md) | `schemaRole: TechArticle` | 同上 |
| [API](./api.md) | `schemaRole: TechArticle` | 同上 |
| [Tutorial](./tutorial.md) | `schemaRole: HowTo`（出力は予約） | 現状 WebPage + SoftwareSourceCode |
| [FAQ](./faq.md) | `schemaRole: FAQPage` + `::faq-item` | WebPage + FAQPage + SoftwareSourceCode |

See [Getting started](./getting-started.md) for details.
