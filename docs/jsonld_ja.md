# JSON-LD の書き方

このテンプレートは、各ページの `<head>` に `@graph` 形式の JSON-LD を1つ挿入します。

基本の考え方は次の2つです。

1. **1ページ = 1スキーマではない。** ページ本体は常に `WebPage`。役割（`TechArticle` など）は追加のエンティティとして `@graph` に並び、関係は `@id` で結ぶ
2. **規約でベースを自動生成し、必要な分だけ書き足す。** `@id` や `isPartOf` のような定型は自動。文脈依存のプロパティ（`datePublished` など）は自分で書く

## どこに何を書くか

| 出したいもの | 書く場所 |
| --- | --- |
| `WebSite`、`SoftwareSourceCode`（全ページ共通） | `site.meta.yaml` |
| `WebPage` の基本情報 | 各 Markdown の `title` / `description` |
| 役割エンティティ（`TechArticle` など） | 各 Markdown の `schemaRole` または `jsonLd.entities` |
| `WebPage` への追加プロパティ | 各 Markdown の `jsonLd.webPage` |
| FAQ の Q/A | 本文の `::faq-list` / `::faq-item`（frontmatter ではない） |

## 最小の書き方（短縮形）

役割を1つ足すだけなら `schemaRole` で足ります。

```yaml
---
title: はじめに
description: ドキュメントサイト雛形の使い方
schemaRole: TechArticle
---
```

これで `WebPage` + `WebSite` + `SoftwareSourceCode` + `TechArticle` が出ます。

`schemaRole` に書けるのは `TechArticle` / `HowTo` / `FAQPage` です。

## 詳細な書き方（`jsonLd`）

プロパティを足したい、あるいはエンティティを複数置きたいときは `jsonLd` を使います。

```yaml
---
title: API リファレンス
description: 公開 API の一覧

jsonLd:
  webPage:
    breadcrumb:
      "@id": https://example.com/ja/api#breadcrumb
  entities:
    - type: TechArticle
      datePublished: "2026-01-01"
      author:
        "@type": Organization
        name: Example Inc.
    - type: BreadcrumbList
      "@id": https://example.com/ja/api#breadcrumb
      itemListElement:
        - "@type": ListItem
          position: 1
          name: ホーム
          item: https://example.com/ja
---
```

### 節の役割

- `jsonLd.webPage` — `WebPage` に足すプロパティ
- `jsonLd.entities` — `@graph` に並べる役割エンティティの配列

### `entities` の書式

`type` だけが予約キーで、他はそのまま schema.org のプロパティになります。

- **既知型**（`TechArticle` / `HowTo` / `FAQPage`）は規約の既定値を持ちます
- **それ以外の型**も書けます。この場合 `@type` と `@id` だけが自動で、`isPartOf` などの関係は自分で書きます（型によって妥当なプロパティが違うため、テンプレートは推測しません）

同じ型を2つ置くこともできます（`@id` は各自で指定してください）。

### 自動生成される値

書かなくてよいものです。

- `WebPage`: `@id`（ページの絶対 URL）/ `url` / `name` ← `title` / `inLanguage` / `isPartOf` → `WebSite` / `about` → `SoftwareSourceCode` / `description` ← `description`
- `TechArticle`: `@id` = `{ページURL}#article` / `headline` ← `title` / `isPartOf` → `WebPage` / `about` → `SoftwareSourceCode`
- `HowTo`: `@id` = `{ページURL}#howto` / `name` ← `title` / `isPartOf` / `about`
- `FAQPage`: `@id` = `{ページURL}#faq` / `isPartOf` / `mainEntity` ← 本文の `::faq-item`

### 上書きの規則

- マージは1階層。**同じキーを書けばユーザー指定が勝ちます**
- `WebPage` の `@id` を上書きした場合、役割エンティティの `isPartOf` はその新しい `@id` を指します
- `FAQPage` の `mainEntity` を自分で書いた場合、本文からの収集より優先されます

### `schemaRole` と併記した場合

`jsonLd.entities` があるときは `schemaRole` は無視され、ビルド時に警告が出ます。どちらか一方にしてください。

## 注意点

**日付はクォートする。** `datePublished: 2026-01-01` と書くと YAML が Date として解釈し、時刻付きの値になります。`datePublished: "2026-01-01"` と書いてください（クォート忘れは日付だけの形に補正しますが、明示するのが安全です）。

**FAQ の Q/A は frontmatter に書かない。** `schemaRole: FAQPage`（または `entities: [{ type: FAQPage }]`）を指定し、本文に次のように書きます。

```md
::faq-list
:::faq-item{question="質問文"}
回答文（Markdown 可）
:::
::
```

`question` 属性が `Question.name`、スロット本文が `Answer.text` になります。Q/A が1つも無い場合、`FAQPage` エンティティは出力されません。

## サンプル

`content/ja/` 以下に役割別のダミーページがあります。

- `index.md` — `schemaRole` なし（`WebPage` のみ）
- `overview.md` / `install.md` / `getting-started.md` — `schemaRole: TechArticle`
- `api.md` — `jsonLd` の詳細記法（プロパティ追加 + 複数エンティティ）
- `tutorial.md` — `schemaRole: HowTo`
- `faq.md` — `schemaRole: FAQPage` + MDC
