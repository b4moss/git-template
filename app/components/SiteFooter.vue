<script setup lang="ts">
const config = useRuntimeConfig();
const footerText = computed(
  () =>
    String(config.public.footerText || "") ||
    "MIT License · 2026 Bicycle for Mind LLC.",
);
</script>

<template>
  <footer class="site-footer">
    <p class="site-footer-text">{{ footerText }}</p>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 1.25rem 1.5rem;
  text-align: center;
}

.site-footer-text {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-muted);
}
</style>
