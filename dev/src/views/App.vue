<script setup lang="ts">
import "reset-css/reset.css";
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/option">option</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
<style>
body {
  min-height: 100dvh;
}
</style>
