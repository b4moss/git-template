---
# =============================================================================
# JSON-LD サンプル（#40）: API リファレンス
# 推奨 @graph: WebPage + TechArticle + SoftwareSourceCode（サイト共通）
# =============================================================================
#
# --- frontmatter（このファイル）---
# title: string
#   → WebPage.name / TechArticle.headline / <title>
# description: string（任意）
#   → WebPage.description / TechArticle.description / meta description
#   例: 対象言語・メジャーバージョンを含めると識別しやすい
# schemaRole: "TechArticle"
#   API リファレンスの標準ロール。関数単位の schema.org 型は出さない
#
# --- TechArticle に現状マップされるプロパティ ---
# headline     ← title
# description  ← description（任意）
# @id          ← "{pageUrl}#article"（自動）
# isPartOf     ← WebPage @id（自動）
# about        ← SoftwareSourceCode @id（自動）
#
# --- まだ frontmatter から出さない例（必要なら #45 の jsonLdExtra）---
# # datePublished / dateModified / author / version などはハッチ or ヘルパ拡張待ち
#
# --- 記述例（コピー用）---
# title: API リファレンス
# description: 公開 API の一覧とシグネチャ（v1）
# schemaRole: TechArticle
#
title: API リファレンス
description: API リファレンスのダミーページ（JSON-LD TechArticle サンプル）
schemaRole: TechArticle
---

# API リファレンス

ダミーの API ページです。`schemaRole: TechArticle` のサンプル。

## `hello(name)`

| 引数 | 型 | 説明 |
| --- | --- | --- |
| `name` | `string` | 表示名 |

戻り値: `string`

実 API に合わせて差し替えてください。
