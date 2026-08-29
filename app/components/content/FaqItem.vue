<script setup lang="ts">
import { vnodeToText } from "~/utils/vnodeText";
import {
  faqListInjectionKey,
  type FaqListContext,
} from "~/utils/faqListContext";

const props = defineProps<{
  question: string;
}>();

const slots = useSlots();
const { upsertFaqItem, removeFaqItem } = useFaqItems();

const id = useId();
const faqList = inject<FaqListContext | null>(faqListInjectionKey, null);

const answerText = computed(() => {
  const rendered = slots.default?.() || [];
  return vnodeToText(rendered).replace(/\s+/g, " ").trim();
});

watch(
  [() => props.question, answerText],
  () => {
    upsertFaqItem({
      id,
      question: props.question,
      answer: answerText.value,
    });
  },
  { immediate: true },
);

onMounted(() => {
  faqList?.registerPanel(id);
});

onBeforeUnmount(() => {
  faqList?.unregisterPanel(id);
  removeFaqItem(id);
});

const open = computed(() => faqList?.isOpen(id) ?? false);

function onToggle() {
  faqList?.toggle(id);
}
</script>

<template>
  <div class="faq-item" :data-open="open">
    <h3 class="faq-item__question">
      <button
        class="faq-item__trigger"
        type="button"
        :aria-expanded="open"
        :aria-controls="`${id}-panel`"
        :id="`${id}-trigger`"
        @click="onToggle"
      >
        <span>{{ question }}</span>
        <span class="faq-item__chevron" aria-hidden="true">{{ open ? "−" : "+" }}</span>
      </button>
    </h3>
    <div
      v-show="open"
      class="faq-item__answer"
      :id="`${id}-panel`"
      role="region"
      :aria-labelledby="`${id}-trigger`"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.faq-item {
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  background: var(--color-surface);
}

.faq-item__question {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.faq-item__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin: 0;
  padding: 0.85rem 1rem;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.faq-item__trigger:hover {
  color: var(--color-accent);
}

.faq-item__chevron {
  flex-shrink: 0;
  color: var(--color-muted);
  font-weight: 500;
}

.faq-item__answer {
  padding: 0 1rem 1rem;
  color: var(--color-ink);
}

.faq-item__answer :deep(> *:first-child) {
  margin-top: 0;
}

.faq-item__answer :deep(> *:last-child) {
  margin-bottom: 0;
}
</style>
