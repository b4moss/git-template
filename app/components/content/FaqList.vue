<script setup lang="ts">
import {
  faqListInjectionKey,
  type FaqListContext,
} from "~/utils/faqListContext";

const { t } = useI18n();
const panelIds = ref<string[]>([]);
const openIds = ref<Set<string>>(new Set());

function registerPanel(id: string) {
  if (!panelIds.value.includes(id)) {
    panelIds.value = [...panelIds.value, id];
  }
}

function unregisterPanel(id: string) {
  panelIds.value = panelIds.value.filter((entry) => entry !== id);
  if (openIds.value.has(id)) {
    const next = new Set(openIds.value);
    next.delete(id);
    openIds.value = next;
  }
}

function isOpen(id: string) {
  return openIds.value.has(id);
}

function toggle(id: string) {
  const next = new Set(openIds.value);
  if (next.has(id)) {
    next.delete(id);
  } else {
    next.add(id);
  }
  openIds.value = next;
}

function expandAll() {
  openIds.value = new Set(panelIds.value);
}

function collapseAll() {
  openIds.value = new Set();
}

provide<FaqListContext>(faqListInjectionKey, {
  registerPanel,
  unregisterPanel,
  isOpen,
  toggle,
});
</script>

<template>
  <div class="faq-list">
    <div class="faq-list__controls">
      <button class="btn faq-list__btn" type="button" @click="expandAll">
        {{ t("faq.expandAll") }}
      </button>
      <button class="btn faq-list__btn" type="button" @click="collapseAll">
        {{ t("faq.collapseAll") }}
      </button>
    </div>
    <div class="faq-list__items">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.faq-list {
  margin: 1.5rem 0;
}

.faq-list__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.faq-list__btn {
  background: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-border);
  font-weight: 500;
  padding: 0.4rem 0.85rem;
}

.faq-list__btn:hover {
  background: var(--color-accent-soft);
  color: var(--color-accent-hover);
}

.faq-list__items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
