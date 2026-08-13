<template>
  <header class="twls-container sidepanel-top">
    <h1 class="heading-1">
      <slot />
    </h1>
  </header>
</template>

<style>
.sidepanel-top {
  padding-top: 1.5rem;
  padding-bottom: 1.25rem;
  margin-left: 0;
  margin-right: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 2rem;
  background: #cf3636;
  color: #fff;
  /* border-bottom: 1px solid var(--text-main); */
  .heading-1 {
    font-size: 1.85rem;
    line-height: 1.04;
    font-weight: 900;
  }
}
</style>
