export type FaqQa = {
  id: string;
  question: string;
  answer: string;
};

/**
 * Shared Q/A registry for FAQPage JSON-LD.
 * FaqItem components upsert entries; useJsonLd reads them.
 */
export function useFaqItems() {
  const items = useState<FaqQa[]>("faq-jsonld-items", () => []);

  function clearFaqItems() {
    items.value = [];
  }

  function upsertFaqItem(item: FaqQa) {
    const next = items.value.filter((entry) => entry.id !== item.id);
    next.push(item);
    items.value = next;
  }

  function removeFaqItem(id: string) {
    items.value = items.value.filter((entry) => entry.id !== id);
  }

  return {
    items,
    clearFaqItems,
    upsertFaqItem,
    removeFaqItem,
  };
}
