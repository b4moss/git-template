<script setup lang="ts">
defineProps<{
  label?: string;
}>();
</script>

<template>
  <div class="uploader">
    <p>{{ label || "File upload placeholder — replace for your feature." }}</p>
    <input type="file" />
  </div>
</template>

<style scoped>
.uploader {
  display: grid;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px dashed #ccc;
  border-radius: 0.5rem;
}
</style>
