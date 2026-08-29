<script setup lang="ts">
import type { SchemaRole } from "~/composables/useJsonLd";

const props = defineProps<{
  pageUrl: string;
  title: string;
  description?: string;
  schemaRole?: SchemaRole;
}>();

useJsonLd({
  pageUrl: () => props.pageUrl,
  title: () => props.title,
  description: () => props.description,
  schemaRole: () => props.schemaRole,
});
</script>

<template>
  <!-- Head-only helper; renders nothing -->
  <span class="docs-json-ld" hidden aria-hidden="true" />
</template>
