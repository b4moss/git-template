<script setup lang="ts">
import type { SchemaRole } from "~/composables/useJsonLd";
import type { PageJsonLdInput } from "~/utils/jsonLdEntities";

const props = defineProps<{
  pageUrl: string;
  title: string;
  description?: string;
  schemaRole?: SchemaRole;
  jsonLd?: PageJsonLdInput;
}>();

useJsonLd({
  pageUrl: () => props.pageUrl,
  title: () => props.title,
  description: () => props.description,
  schemaRole: () => props.schemaRole,
  jsonLd: () => props.jsonLd,
});
</script>

<template>
  <!-- Head-only helper; renders nothing -->
  <span class="docs-json-ld" hidden aria-hidden="true" />
</template>
