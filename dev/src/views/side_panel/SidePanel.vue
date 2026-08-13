<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useAppStore } from "../../stores/app";

const appStore = useAppStore();
const { ready } = storeToRefs(appStore);

onMounted(() => {
  appStore.markReady();
});
</script>

<template>
  <div class="panel">
    <h1>CRX Vue Starter</h1>
    <p>Side panel scaffold. Replace this UI with your feature.</p>
    <p class="status">Store ready: {{ ready }}</p>
  </div>
</template>

<style scoped>
.panel {
  padding: 1rem;
  font-family: system-ui, sans-serif;
}
.status {
  color: #555;
  font-size: 0.875rem;
}
</style>
