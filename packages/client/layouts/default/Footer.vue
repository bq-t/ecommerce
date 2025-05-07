<template>
  <footer class="bg-primary text-white w-full">
    <div class="py-24 px-40 w-full max-w-[90rem] mx-auto">
      <div class="flex">
        <div class="w-full max-w-sm mr-28">
          <u-link class="text-white" to="/"> Logotype </u-link>
          <div class="text-[#CFCFCF] text-sm mt-6">
            {{ description }}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 w-full">
          <div
            v-for="(linkGroup, linkGroupIndex) in linkGroups"
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
          v-for="(social, socialIndex) in socials"
          :key="socialIndex"
          target="_blank"
          size="sm"
          :icon="social.icon"
          :to="social.url"
          :ui="{ base: 'p-0' }"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const description = computed(
  () =>
    'We are a residential interior design firm located in Portland.Our boutique-studio offers more than',
)

const linkGroups = computed(() => [
  {
    label: 'Services',
    links: [
      {
        label: 'Bonus program',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Gift cards',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Credit and payment',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Service contracts',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Non-cash account',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Payment',
        url: 'https://google.com',
        target: '_blank',
      },
    ],
  },
  {
    label: 'Assistance to the buyer',
    links: [
      {
        label: 'Find an order',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Terms of delivery',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Exchange and return of goods',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Guarantee',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Frequently asked questions',
        url: 'https://google.com',
        target: '_blank',
      },
      {
        label: 'Terms of use of the site',
        url: 'https://google.com',
        target: '_blank',
      },
    ],
  },
])

const socials = computed(() => [
  {
    icon: 'mdi:twitter',
    url: 'https://google.com',
    target: '_blank',
  },
  {
    icon: 'mdi:facebook',
    url: 'https://google.com',
    target: '_blank',
  },
])
</script>
