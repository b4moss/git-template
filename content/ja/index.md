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
title: ホーム
description: Nuxt Content ドキュメントサイトのスキャフォールド
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
#       "@id": "https://example.com/ja",
#       "url": "https://example.com/ja",
#       "name": "ホーム",
#       "description": "Nuxt Content …",
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

このブランチは、Nuxt Content ベースのドキュメントサイト雛形です。

## 次のステップ

1. `site.meta.yaml.example` を `site.meta.yaml` にコピーしてサイト変数を設定する
2. `app/config/docsNav.ts` でサイドバー／ページャーのナビを編集する
3. `content/{ja,en}/` に Markdown を追加する（必要なら `schemaRole`）
4. `i18n/locales/` の `nav.*` ラベルを揃える

## JSON-LD ダミーページ（#40）— 何を書くと何が出るか

| ページ | 書く場所の要点 | 出る `@graph` |
| --- | --- | --- |
| このページ（トップ） | `schemaRole` なし + `site.meta.yaml` | WebPage + SoftwareSourceCode |
| [概要](./overview.md) | `schemaRole: TechArticle` | WebPage + TechArticle + SoftwareSourceCode |
| [インストール](./install.md) | `schemaRole: TechArticle` | 同上 |
| [API](./api.md) | `schemaRole: TechArticle` | 同上 |
| [チュートリアル](./tutorial.md) | `schemaRole: HowTo`（出力は予約） | 現状 WebPage + SoftwareSourceCode |
| [FAQ](./faq.md) | `schemaRole: FAQPage` + `::faq-item` | WebPage + FAQPage + SoftwareSourceCode |

詳しくは [はじめに](./getting-started.md) を参照してください。
