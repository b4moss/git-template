<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { SchemaRole } from "~/composables/useJsonLd";
import type { PageJsonLdInput } from "~/utils/jsonLdEntities";
import type { FaqQa } from "~/utils/extractFaq";

/**
 * Head-only helper: pushes JSON-LD into <head> and renders nothing.
 * Must return `null` (not an empty / comment-only template) so SSR and
 * client hydration agree on a single comment anchor node.
 */
export default defineComponent({
  name: "DocsJsonLd",
  props: {
    pageUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    schemaRole: { type: String as PropType<SchemaRole>, required: false },
    jsonLd: {
      type: Object as PropType<PageJsonLdInput>,
      required: false,
    },
    faqItems: {
      type: Array as PropType<FaqQa[]>,
      required: false,
    },
  },
  setup(props) {
    useJsonLd({
      pageUrl: () => props.pageUrl,
      title: () => props.title,
      description: () => props.description,
      schemaRole: () => props.schemaRole,
      jsonLd: () => props.jsonLd,
      faqItems: () => props.faqItems,
    });
    return () => null;
  },
});
</script>
