<template>
  <header class="w-full border-b border-[#B5B5B5]">
    <div class="flex items-center py-7 px-40 w-full max-w-[90rem] mx-auto">
      <u-link class="mr-auto" to="/"> Logotype </u-link>
      <u-navigation-menu
        color="primary"
        variant="link"
        :items="navigationItems"
        :ui="{
          list: 'gap-12',
          link: 'text-base',
        }"
      />
      <div class="flex gap-x-6 ml-14">
        <u-button
          v-for="(action, actionIndex) in actions"
          :key="actionIndex"
          variant="link"
          :icon="action.icon"
          :ui="{
            base: 'p-0',
            leadingIcon: 'size-8',
          }"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const navigationItems = computed(() => [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Contact Us' },
  { label: 'Blog' },
])

const actions = computed(() => ({
  favorites: {
    icon: 'prime:heart',
  },
  cart: {
    icon: 'prime:shopping-cart',
  },
  authorization: {
    icon: 'prime:user',
  },
}))
</script>
