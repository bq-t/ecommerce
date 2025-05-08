export default defineNuxtPlugin(async () => {
  const globalStore = useGlobalStore()
  await globalStore.fetchConfig()
})
