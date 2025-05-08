// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/strapi',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  typescript: { typeCheck: true },
  ui: {
    colorMode: false,
    theme: {
      colors: ['black', 'white'],
    },
  },
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: process.env.CLOUDINARY_URL,
    },
  },
})
