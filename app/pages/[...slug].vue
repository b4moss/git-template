<script setup lang="ts">
import { withLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";
import type { SchemaRole } from "~/composables/useJsonLd";

const route = useRoute();
const { locale } = useI18n();
const config = useRuntimeConfig();

const slug = computed(() => {
  const raw = route.params.slug;
  if (!raw || (Array.isArray(raw) && raw.length === 0)) {
    return "/";
  }
  const joined = Array.isArray(raw) ? raw.join("/") : String(raw);
  return withLeadingSlash(joined);
});

/** Ignore browser / tooling asset probes (e.g. manifest.webmanifest). */
const isAssetPath = computed(() =>
  /\.[a-z0-9]{2,8}$/i.test(slug.value.replace(/\/$/, "")),
);

if (isAssetPath.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Not Found",
    fatal: false,
  });
}

const { data: page } = await useAsyncData(
  () => `content-${locale.value}-${slug.value}`,
  async () => {
    const collection = (`content_${locale.value}`) as keyof Collections;
    return queryCollection(collection).path(slug.value).first();
  },
  { watch: [locale, slug] },
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: false,
  });
}

const pageTitle = computed(
  () => page.value?.title || String(config.public.siteName || "Doc Site"),
);

useSeoMeta({
  title: () => pageTitle.value,
  description: () => page.value?.description || undefined,
});

const siteUrl = computed(() =>
  String(config.public.siteUrl || "https://example.com").replace(/\/$/, ""),
);

const pageUrl = computed(() => {
  const path =
    slug.value === "/" ? `/${locale.value}` : `/${locale.value}${slug.value}`;
  return `${siteUrl.value}${path}`;
});

const schemaRole = computed(() => {
  const role = (page.value as { schemaRole?: SchemaRole } | null)?.schemaRole;
  return role;
});

useJsonLd({
  pageUrl,
  title: pageTitle,
  description: () => page.value?.description || undefined,
  schemaRole,
});
</script>

<template>
  <div>
    <article class="prose">
      <ContentRenderer v-if="page" :value="page" />
    </article>
    <DocsPager />
  </div>
</template>
