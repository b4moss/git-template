import type { FaqQa } from "./useFaqItems";
import {
  buildJsonLdEntity,
  buildOrganization,
  buildWebPage,
  resolveEntityInputs,
  sanitizeExtraEntities,
  type JsonLdObject,
  type PageJsonLdInput,
} from "~/utils/jsonLdEntities";

export type SchemaRole = "TechArticle" | "HowTo" | "FAQPage";

type UseJsonLdOptions = {
  pageUrl: MaybeRefOrGetter<string>;
  title: MaybeRefOrGetter<string>;
  description?: MaybeRefOrGetter<string | undefined>;
  schemaRole?: MaybeRefOrGetter<SchemaRole | undefined>;
  jsonLd?: MaybeRefOrGetter<PageJsonLdInput | undefined>;
};

/**
 * Site-level WebSite node. Every WebPage points at it via isPartOf, so it has
 * to exist in the graph for that reference to resolve.
 */
function webSiteEntity(
  siteUrl: string,
  config: ReturnType<typeof useRuntimeConfig>,
  languages: string[],
  organizationId?: string,
) {
  const entity: JsonLdObject = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: config.public.siteName || "Doc Site",
    about: { "@id": `${siteUrl}/#software` },
  };
  if (organizationId) {
    entity.publisher = { "@id": organizationId };
  }
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

/** Q/A pairs collected from MDC, deduplicated by question text. */
function faqQuestions(faqs: FaqQa[]): JsonLdObject[] {
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

  return mainEntity;
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
    const jsonLd = toValue(options.jsonLd);

    const siteName = String(config.public.siteName || "Doc Site");
    const organization = buildOrganization(
      config.public.organization as Record<string, unknown> | null,
      siteUrl,
      siteName,
    );
    const organizationId = organization
      ? String(organization["@id"])
      : undefined;

    const webPage = buildWebPage(
      {
        pageUrl,
        siteUrl,
        title,
        description,
        inLanguage: inLanguage.value,
        organizationId,
      },
      jsonLd?.webPage,
    );

    // Authored props may override the page @id, so resolve it before the role
    // entities that reference it.
    const resolvedPageUrl = String(webPage["@id"] || pageUrl);

    const entities: JsonLdObject[] = [
      webPage,
      webSiteEntity(siteUrl, config, languages.value, organizationId),
      softwareEntity(siteUrl, config),
    ];

    if (organization) {
      entities.push(organization);
    }

    const entityContext = {
      pageUrl: resolvedPageUrl,
      siteUrl,
      title,
      description,
      inLanguage: inLanguage.value,
      faqMainEntity: faqQuestions(faqItems.value),
      organizationId,
    };

    for (const input of resolveEntityInputs(schemaRole, jsonLd)) {
      const entity = buildJsonLdEntity(input, entityContext);
      if (entity) {
        entities.push(entity);
      }
    }

    entities.push(
      ...sanitizeExtraEntities(config.public.jsonLdExtra, "site.meta.yaml jsonLdExtra"),
      ...sanitizeExtraEntities(jsonLd?.extra, "frontmatter jsonLd.extra"),
    );

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
