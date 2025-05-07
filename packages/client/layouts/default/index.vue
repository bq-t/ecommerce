<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <layout-header />
  <main>
    <slot />
  </main>
</template>

<script lang="ts" setup>
import LayoutHeader from './Header.vue'
</script>
