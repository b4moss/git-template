---
# =============================================================================
# JSON-LD サンプル（#40）: インストール
# 推奨 @graph: WebPage + TechArticle + SoftwareSourceCode（サイト共通）
# =============================================================================
#
# --- frontmatter（このファイル）---
# title: string
#   → WebPage.name
#   → TechArticle.headline
#   → <title> / useSeoMeta.title
# description: string（任意）
#   → WebPage.description / TechArticle.description / meta description
#   例: 前提条件・対応環境を一文で書くと検索スニペット向き
# schemaRole: "TechArticle"
#   インストール手順でも現状の標準ロールは TechArticle
#   （手順そのものを HowTo にしたい場合は tutorial.md を参照。HowTo 出力は予約のみ）
#
# --- TechArticle 自動生成（書かない）---
# @type "TechArticle" / @id "{pageUrl}#article" / headline←title
# isPartOf→WebPage / about→SoftwareSourceCode
#
# --- 記述例（コピー用）---
# title: インストール
# description: Node.js 18+ 向け。npm / pnpm / bun での導入手順
# schemaRole: TechArticle
#
title: インストール
description: インストール手順のダミーページ（JSON-LD TechArticle サンプル）
schemaRole: TechArticle
---

# インストール

ダミーのインストールページです。`schemaRole: TechArticle` のサンプル。

```bash
npm install your-package
```

手順の詳細はプロダクトに合わせて書き換えてください。
