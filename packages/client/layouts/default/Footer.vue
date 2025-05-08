<template>
  <footer class="bg-primary text-white w-full">
    <div class="py-24 px-40 w-full max-w-[90rem] mx-auto">
      <div class="flex">
        <div class="w-full max-w-sm mr-28">
          <u-link class="text-white" to="/">
            <nuxt-img
              :src="footerData.logotype.url"
              :alt="footerData.logotype.alternativeText"
            />
          </u-link>
          <div class="text-[#CFCFCF] text-sm mt-6">
            {{ footerData.description }}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 w-full">
          <div
            v-for="(linkGroup, linkGroupIndex) in footerData.linkGroups"
            :key="linkGroupIndex"
            class="flex flex-col gap-y-2"
          >
            <h4 class="font-semibold">
              {{ linkGroup.label }}
            </h4>
            <u-link
              v-for="(link, linkIndex) in linkGroup.links"
              :key="linkIndex"
              class="text-[#CFCFCF] text-sm"
              :to="link.url"
              :target="link.target"
              raw
            >
              {{ link.label }}
            </u-link>
          </div>
        </div>
      </div>
      <div class="flex gap-x-9 mt-6">
        <u-button
          v-for="(social, socialIndex) in footerData.socials"
          :key="socialIndex"
          target="_blank"
          size="sm"
          :icon="social.icon.iconName"
          :to="social.url"
          :ui="{ base: 'p-0' }"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import type { GlobalFooter } from '@/types/models/single/global'

const globalStore = useGlobalStore()
const footerData: GlobalFooter = globalStore.footerData
</script>
