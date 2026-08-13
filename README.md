> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# doc-site

Nuxt Content documentation site scaffold (from the `doc-site` branch of [git-template](https://github.com/b4moss/git-template)).

Shared shell: header utilities (language, color mode, mobile menu, optional GitHub), footer, sidebar / pager, bilingual Content collections.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run generate
```

## Customize

| File | Purpose |
| --- | --- |
| `nuxt.config.ts` → `runtimeConfig.public` | `siteName`, `siteVersion`, `githubUrl`, `footerText` |
| `app/config/docsNav.ts` | Sidebar / pager entries |
| `content/{ja,en}/` | Markdown pages |
| `i18n/locales/` | UI copy (including `nav.*` labels) |

## License

[MIT License](./LICENSE)
