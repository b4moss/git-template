---
# =============================================================================
# JSON-LD サンプル（#40）: OSS 概要
# 推奨 @graph: WebPage + TechArticle + SoftwareSourceCode（サイト共通）
# =============================================================================
#
# --- frontmatter（このファイル）---
# title: string
#   → WebPage.name
#   → TechArticle.headline
#   → <title> / useSeoMeta.title
# description: string（任意）
#   → WebPage.description
#   → TechArticle.description
#   → meta description
# schemaRole: "TechArticle"（このページ種別の推奨値）
#   → @graph に TechArticle エンティティを追加
#   他候補: HowTo | FAQPage（ページ役割が違うときだけ変更）
#
# --- TechArticle 自動生成（書かない）---
# TechArticle.@type     … "TechArticle"
# TechArticle.@id       … "{pageUrl}#article"
# TechArticle.headline  … title と同じ
# TechArticle.isPartOf  … { "@id": pageUrl }  （親 WebPage）
# TechArticle.about     … { "@id": "{siteUrl}/#software" }
#
# --- WebPage / SoftwareSourceCode ---
# WebPage は全ページ共通（@id/url/name/isPartOf/about + 任意 description）
# SoftwareSourceCode は site.meta.yaml の software.*（詳細は index.md / site.meta.yaml.example）
#
# --- 記述例（コピー用）---
# title: 概要
# description: プロダクトの短い説明（検索結果・JSON-LD 双方に使う）
# schemaRole: TechArticle
#
title: 概要
description: プロダクト概要のダミーページ（JSON-LD TechArticle サンプル）
schemaRole: TechArticle
---

# 概要

ダミーの概要ページです。frontmatter の `schemaRole: TechArticle` により、JSON-LD に `WebPage` + `TechArticle` + `SoftwareSourceCode` が入ります。

本文はプレースホルダです。実プロダクトの紹介文に差し替えてください。
