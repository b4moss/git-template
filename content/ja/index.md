---
# =============================================================================
# JSON-LD サンプル（#40）: OSS トップ
# 推奨 @graph: WebPage + SoftwareSourceCode（サイト共通）
# schemaRole は付けない（ページ役割スキーマなし）
# =============================================================================
#
# --- frontmatter（このファイル）---
# title: string（必須相当）
#   → WebPage.name
#   → <title> / useSeoMeta.title
# description: string（任意）
#   → WebPage.description（未指定なら description プロパティ自体を出さない）
#   → meta description
# schemaRole: 省略すること
#   取りうる値は TechArticle | HowTo | FAQPage のみ（content.config.ts）
#   トップでは付けない。付けると役割エンティティが追加される
#
# --- 自動生成（書かない）---
# WebPage.@context     … ルートの "@context": "https://schema.org"
# WebPage.@type        … "WebPage"
# WebPage.@id          … {siteUrl}/{locale}{path}  （例: https://example.com/ja）
# WebPage.url          … @id と同じ
# WebPage.isPartOf     … { "@id": "{siteUrl}/#website" }  （WebSite 実体は別途 #45 等）
# WebPage.about        … { "@id": "{siteUrl}/#software" }
#
# --- サイト共通 site.meta.yaml → SoftwareSourceCode ---
# software.name                 → name（省略時 siteName）
# software.codeRepository       → codeRepository（省略時 githubUrl）
# software.license              → license（例: MIT）
# software.programmingLanguage  → string[]（空配列可）
# SoftwareSourceCode.@id        … "{siteUrl}/#software"（固定）
#
# --- 記述例（コピー用・コメントのまま）---
# title: ホーム
# description: プロダクトのドキュメントサイト
# # schemaRole: TechArticle   # ← トップでは通常使わない
#
title: ホーム
description: Nuxt Content ドキュメントサイトのスキャフォールド
---

# Doc Site

このブランチは、Nuxt Content ベースのドキュメントサイト雛形です。

## 次のステップ

1. `site.meta.yaml.example` を `site.meta.yaml` にコピーしてサイト変数を設定する
2. `app/config/docsNav.ts` でサイドバー／ページャーのナビを編集する
3. `content/{ja,en}/` に Markdown を追加する（必要なら `schemaRole`）
4. `i18n/locales/` の `nav.*` ラベルを揃える

## JSON-LD ダミーページ（#40）

| ページ | `schemaRole` |
| --- | --- |
| [概要](./overview.md) | `TechArticle` |
| [インストール](./install.md) | `TechArticle` |
| [API](./api.md) | `TechArticle` |
| [チュートリアル](./tutorial.md) | `HowTo`（予約） |
| [FAQ](./faq.md) | `FAQPage` |

詳しくは [はじめに](./getting-started.md) を参照してください。
