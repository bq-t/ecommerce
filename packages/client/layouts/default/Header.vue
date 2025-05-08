<template>
  <header class="w-full border-b border-[#B5B5B5]">
    <div class="flex items-center py-7 px-40 w-full max-w-[90rem] mx-auto">
      <u-link class="mr-auto" to="/">
        <nuxt-img
          :src="headerData.logotype.url"
          :alt="headerData.logotype.alternativeText"
        />
      </u-link>
      <u-navigation-menu
        color="primary"
        variant="link"
        :items="navigationItems"
        :ui="{
          list: 'gap-12',
          link: 'text-base',
        }"
      />
      <div v-if="actions.length" class="flex gap-x-6 ml-14">
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
import type {
  GlobalHeader,
  GlobalNavbar,
  GlobalSettings,
} from '@/types/models/single/global'

const globalStore = useGlobalStore()
const settings: GlobalSettings = globalStore.settings
const headerData: GlobalHeader = globalStore.headerData
const navbarData: GlobalNavbar = globalStore.navbarData

const navigationItems = computed(() =>
  navbarData.items.map((item) => ({
    label: item.label,
    to: item.url,
    target: item?.target || '_self',
  })),
)

const actions = computed(() => {
  const availableFeatures: Record<
    keyof GlobalSettings['features'],
    { icon: string }
  > = {
    favorites: {
      icon: 'prime:heart',
    },
    cart: {
      icon: 'prime:shopping-cart',
    },
    authorization: {
      icon: 'prime:user',
    },
  }

  return (
    Object.keys(availableFeatures) as Array<keyof GlobalSettings['features']>
  )
    .filter((feature) => settings.features[feature])
    .map((feature) => availableFeatures[feature])
})
</script>
