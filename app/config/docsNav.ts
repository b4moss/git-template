export type DocsNavItem = {
  key: string;
  path: string;
  /** i18n key under `nav.*` (e.g. `home` → `nav.home`). */
  labelKey: string;
  /** When set, item is a child of this nav key (shown indented in sidebar). */
  parent?: string;
};

/**
 * Edit this list to shape the docs sidebar / pager.
 * Labels come from `i18n/locales/{ja,en}.ts` → `nav.<labelKey>`.
 */
export const docsNavItems: DocsNavItem[] = [
  { key: "home", path: "/", labelKey: "home" },
  { key: "gettingStarted", path: "/getting-started", labelKey: "gettingStarted" },
  { key: "faq", path: "/faq", labelKey: "faq" },
  { key: "syntaxContrast", path: "/syntax-contrast", labelKey: "syntaxContrast" },
];
