export type SiteSoftwareMeta = {
  name: string;
  codeRepository: string;
  license: string;
  programmingLanguage: string[];
};

export type SiteMeta = {
  siteName: string;
  siteUrl: string;
  siteVersion: string;
  description: string;
  githubUrl: string;
  footerText: string;
  software: SiteSoftwareMeta;
};

export const defaultSiteMeta: SiteMeta = {
  siteName: "Doc Site",
  siteUrl: "https://example.com",
  siteVersion: "",
  description: "",
  githubUrl: "https://github.com/b4moss/git-template",
  footerText: "MIT License · 2026 Bicycle for Mind LLC.",
  software: {
    name: "Doc Site",
    codeRepository: "https://github.com/b4moss/git-template",
    license: "MIT",
    programmingLanguage: [],
  },
};

type RawSiteMeta = Partial<Omit<SiteMeta, "software">> & {
  software?: Partial<SiteSoftwareMeta>;
};

export function normalizeSiteMeta(raw: RawSiteMeta | null | undefined): SiteMeta {
  const base = { ...defaultSiteMeta, ...(raw || {}) };
  const siteName = String(base.siteName || defaultSiteMeta.siteName);
  const githubUrl = String(base.githubUrl || defaultSiteMeta.githubUrl);
  const softwareRaw = raw?.software || {};

  return {
    siteName,
    siteUrl: String(base.siteUrl || defaultSiteMeta.siteUrl).replace(/\/$/, ""),
    siteVersion: String(base.siteVersion ?? ""),
    description: String(base.description ?? ""),
    githubUrl,
    footerText: String(base.footerText || defaultSiteMeta.footerText),
    software: {
      name: String(softwareRaw.name || siteName),
      codeRepository: String(softwareRaw.codeRepository || githubUrl),
      license: String(softwareRaw.license || defaultSiteMeta.software.license),
      programmingLanguage: Array.isArray(softwareRaw.programmingLanguage)
        ? softwareRaw.programmingLanguage.map(String)
        : [],
    },
  };
}
