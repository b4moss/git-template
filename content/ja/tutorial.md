---
# =============================================================================
# JSON-LD サンプル（#40）: チュートリアル
# 推奨 @graph: WebPage + HowTo + SoftwareSourceCode（サイト共通）
# 注: HowTo エンティティの出力は予約のみ（step 抽出は未実装）
# =============================================================================
#
# --- frontmatter（このファイル）---
# title: string
#   → WebPage.name / <title>
#   → （将来）HowTo.name
# description: string（任意）
#   → WebPage.description / meta description
#   → （将来）HowTo.description
# schemaRole: "HowTo"
#   content.config.ts では受付済み
#   useJsonLd() は現状 HowTo を @graph に積まない（WebPage + SoftwareSourceCode のみ）
#
# --- 将来 HowTo に載せる想定プロパティ（まだ書いても JSON-LD に出ない）---
# # howTo.name / howTo.description     ← title / description から
# # howTo.@id                          ← "{pageUrl}#howto"（想定）
# # howTo.isPartOf                     ← WebPage
# # howTo.about                        ← SoftwareSourceCode
# # howTo.step[]                       ← 本文の手順から抽出（未実装）
# #   HowToStep.name / text / position / url など
# # howTo.totalTime / tool / supply    ← 未サポート（ハッチ #45 で生挿入可）
#
# --- 記述例（コピー用）---
# title: はじめてのセットアップ
# description: clone から dev サーバ起動まで（約 5 分）
# schemaRole: HowTo
#
title: チュートリアル
description: チュートリアルのダミーページ（JSON-LD HowTo ロール予約サンプル）
schemaRole: HowTo
---

# チュートリアル

ダミーのチュートリアルページです。frontmatter で `schemaRole: HowTo` を指定するサンプルです。

現状、`HowTo` はロール予約のみで、手順エンティティの自動生成は行いません（`WebPage` + `SoftwareSourceCode` は出力されます）。

1. リポジトリを clone する
2. 依存関係を入れる
3. 開発サーバを起動する
