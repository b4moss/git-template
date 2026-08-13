---
title: Getting started
description: How to use this documentation site scaffold
---

# Getting started

## Dev server

```bash
npm install
npm run dev
```

## Static generate

```bash
npm run generate
```

Output goes to `.output/public`.

## Customization map

| Location | Purpose |
| --- | --- |
| `nuxt.config.ts` | Site name, version, GitHub, footer, prerender routes |
| `app/config/docsNav.ts` | Sidebar / pager |
| `content/{ja,en}/` | Markdown pages |
| `i18n/locales/` | UI copy (including nav labels) |
