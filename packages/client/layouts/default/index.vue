<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <layout-header />
  <main class="mx-auto w-full max-w-[90rem]">
    <slot />
  </main>
  <layout-footer />
</template>

<script lang="ts" setup>
import LayoutHeader from './Header.vue'
import LayoutFooter from './Footer.vue'
</script>
