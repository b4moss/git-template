> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# doc-site

Nuxt Content documentation site scaffold (from the `doc-site` branch of [git-template](https://github.com/b4moss/git-template)).

Shared shell: header utilities (language, color mode, mobile menu, optional GitHub), footer, sidebar / pager, bilingual Content collections, JSON-LD helpers, FAQ accordion.

## Quick start

```bash
npm install
cp site.meta.yaml.example site.meta.yaml   # optional; example is used as fallback
npm run dev
```

```bash
npm run generate
```

## Customize

| File | Purpose |
| --- | --- |
| `site.meta.yaml` (from `site.meta.yaml.example`) | Site name, URL, GitHub, SoftwareSourceCode meta → `runtimeConfig.public` |
| `nuxt.config.ts` | Loads YAML, modules, prerender routes |
| `app/config/docsNav.ts` | Sidebar / pager entries |
| `content/{ja,en}/` | Markdown pages (`schemaRole`: `TechArticle` / `FAQPage` / `HowTo`) |
| `content/*/syntax-contrast.md` | Dark code-block token contrast sample (delete if unused) |
| `::faq-list` / `::faq-item` | FAQ accordion + `FAQPage` JSON-LD (see `content/*/faq.md`) |
| `i18n/locales/` | UI copy (including `nav.*` labels) |

## License

[MIT License](./LICENSE)
