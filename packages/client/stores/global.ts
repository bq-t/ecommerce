import type { Global } from '@/types/models/single/global'

export const useGlobalStore = defineStore('globalStore', () => {
  const state = useState<Global>('global')

  const settings = computed(() => state.value.settings)

  const headerData = computed(() => state.value.header)
  const navbarData = computed(() => state.value.navbar)
  const footerData = computed(() => state.value.footer)

  return {
    settings,
    headerData,
    navbarData,
    footerData,
  }
})
