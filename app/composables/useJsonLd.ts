import type { FaqQa } from "./useFaqItems";

export type SchemaRole = "TechArticle" | "HowTo" | "FAQPage";

type JsonLdObject = Record<string, unknown>;

type UseJsonLdOptions = {
  pageUrl: MaybeRefOrGetter<string>;
  title: MaybeRefOrGetter<string>;
  description?: MaybeRefOrGetter<string | undefined>;
  schemaRole?: MaybeRefOrGetter<SchemaRole | undefined>;
};

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
  const mainEntity = faqs
    .filter((item) => item.question.trim() && item.answer.trim())
    .map((item) => ({
      "@type": "Question",
      name: item.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.trim(),
      },
    }));

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

export function useJsonLd(options: UseJsonLdOptions) {
  const config = useRuntimeConfig();
  const { items: faqItems, clearFaqItems } = useFaqItems();

  const siteUrl = String(config.public.siteUrl || "https://example.com").replace(
    /\/$/,
    "",
  );

  // Reset FAQ registry on locale / slug navigation (skip initial run so SSR items stay).
  watch(
    () => toValue(options.pageUrl),
    (_url, prev) => {
      if (prev !== undefined) {
        clearFaqItems();
      }
    },
  );

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
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#software` },
    };
    if (description) {
      webPage.description = description;
    }

    const entities: JsonLdObject[] = [
      webPage,
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
