---
# JSON-LD サンプル（#40）: OSS トップ
# 推奨: WebPage + SoftwareSourceCode（サイト共通）のみ
# schemaRole は付けない（ページ役割スキーマなし）
title: ホーム
description: Nuxt Content ドキュメントサイトのスキャフォールド
# 記述例（トップでは通常 schemaRole を省略）:
# title: ホーム
# description: プロダクトのドキュメントサイト
# schemaRole: TechArticle   # ← トップでは通常使わない
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
