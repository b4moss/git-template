---
title: はじめに
description: ドキュメントサイト雛形の使い方
---

# はじめに

## 開発サーバ

```bash
npm install
npm run dev
```

## 静的生成

```bash
npm run generate
```

出力は `.output/public` です。

## カスタマイズ要点

| 場所 | 内容 |
| --- | --- |
| `nuxt.config.ts` | サイト名・version・GitHub・フッター、prerender ルート |
| `app/config/docsNav.ts` | サイドバー／ページャー |
| `content/{ja,en}/` | Markdown 本文 |
| `i18n/locales/` | UI 文言（ナビラベル含む） |
