import type { FaqQa } from "./useFaqItems";

export type SchemaRole = "TechArticle" | "HowTo" | "FAQPage";

type JsonLdObject = Record<string, unknown>;

type UseJsonLdOptions = {
  pageUrl: MaybeRefOrGetter<string>;
  title: MaybeRefOrGetter<string>;
  description?: MaybeRefOrGetter<string | undefined>;
  schemaRole?: MaybeRefOrGetter<SchemaRole | undefined>;
};

/**
 * Site-level WebSite node. Every WebPage points at it via isPartOf, so it has
 * to exist in the graph for that reference to resolve.
 */
function webSiteEntity(
  siteUrl: string,
  config: ReturnType<typeof useRuntimeConfig>,
  languages: string[],
) {
  const entity: JsonLdObject = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: config.public.siteName || "Doc Site",
    about: { "@id": `${siteUrl}/#software` },
  };
  const description = config.public.description;
  if (description) {
    entity.description = description;
  }
  if (languages.length) {
    entity.inLanguage = languages;
  }
  return entity;
}

function softwareEntity(siteUrl: string, config: ReturnType<typeof useRuntimeConfig>) {
  const software = (config.public.software || {}) as {
    name?: string;
    codeRepository?: string;
    license?: string;
    programmingLanguage?: string[];
  };
  const entity: JsonLdObject = {
    "@type": "SoftwareSourceCode",
    "@id": `${siteUrl}/#software`,
    name: software.name || config.public.siteName || "Doc Site",
    codeRepository: software.codeRepository || config.public.githubUrl,
  };
  if (software.license) {
    entity.license = software.license;
  }
  if (software.programmingLanguage?.length) {
    entity.programmingLanguage = software.programmingLanguage;
  }
  return entity;
}

function faqPageEntity(pageUrl: string, faqs: FaqQa[]): JsonLdObject | null {
  const seen = new Set<string>();
  const mainEntity: JsonLdObject[] = [];

  for (const item of faqs) {
    const question = item.question.trim();
    const answer = item.answer.trim();
    if (!question || !answer || seen.has(question)) {
      continue;
    }
    seen.add(question);
    mainEntity.push({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    });
  }

  if (mainEntity.length === 0) {
    return null;
  }

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    isPartOf: { "@id": pageUrl },
    mainEntity,
  };
}

type LocaleEntry = { code: string; language?: string };

export function useJsonLd(options: UseJsonLdOptions) {
  const config = useRuntimeConfig();
  const { items: faqItems } = useFaqItems();
  const { locale, locales } = useI18n();

  const siteUrl = String(config.public.siteUrl || "https://example.com").replace(
    /\/$/,
    "",
  );

  /** BCP 47 tags (e.g. ja-JP) from the i18n locale config, code as fallback. */
  const localeEntries = computed(() =>
    (locales.value as Array<string | LocaleEntry>).map((entry) =>
      typeof entry === "string" ? { code: entry } : entry,
    ),
  );

  const languages = computed(() =>
    localeEntries.value.map((entry) => entry.language || entry.code),
  );

  const inLanguage = computed(() => {
    const current = localeEntries.value.find(
      (entry) => entry.code === locale.value,
    );
    return current?.language || String(locale.value);
  });

  const graph = computed(() => {
    const pageUrl = toValue(options.pageUrl);
    const title = toValue(options.title);
    const description = toValue(options.description);
    const schemaRole = toValue(options.schemaRole);

    const webPage: JsonLdObject = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: title,
      inLanguage: inLanguage.value,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#software` },
    };
    if (description) {
      webPage.description = description;
    }

    const entities: JsonLdObject[] = [
      webPage,
      webSiteEntity(siteUrl, config, languages.value),
      softwareEntity(siteUrl, config),
    ];

    if (schemaRole === "TechArticle") {
      const article: JsonLdObject = {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: title,
        isPartOf: { "@id": pageUrl },
        about: { "@id": `${siteUrl}/#software` },
      };
      if (description) {
        article.description = description;
      }
      entities.push(article);
    }

    // HowTo: type reserved on frontmatter only; entity emission deferred.

    if (schemaRole === "FAQPage") {
      const faq = faqPageEntity(pageUrl, faqItems.value);
      if (faq) {
        entities.push(faq);
      }
    }

    return {
      "@context": "https://schema.org",
      "@graph": entities,
    };
  });

  useHead({
    script: computed(() => [
      {
        key: "json-ld",
        type: "application/ld+json",
        children: JSON.stringify(graph.value),
      },
    ]),
  });

  return { graph };
}
