<script setup lang="ts">
import type { SchemaRole } from "~/composables/useJsonLd";
import type { PageJsonLdInput } from "~/utils/jsonLdEntities";
import type { FaqQa } from "~/utils/extractFaq";

const props = defineProps<{
  pageUrl: string;
  title: string;
  description?: string;
  schemaRole?: SchemaRole;
  jsonLd?: PageJsonLdInput;
  faqItems?: FaqQa[];
}>();

useJsonLd({
  pageUrl: () => props.pageUrl,
  title: () => props.title,
  description: () => props.description,
  schemaRole: () => props.schemaRole,
  jsonLd: () => props.jsonLd,
  faqItems: () => props.faqItems,
});
</script>

<template>
  <!-- Head-only helper: the JSON-LD goes into <head>, nothing is rendered here -->
</template>
