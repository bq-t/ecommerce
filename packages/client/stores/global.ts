import type { Global } from '@/types/models/single/global'

export const useGlobalStore = defineStore('globalStore', () => {
  const state = useState<Global>('global')

  const fetchConfig = async () => {
    const { findOne } = useStrapi()

    try {
      await callOnce('global', async () => {
        const { data } = await findOne<Global>('global', {
          populate: {
            header: {
              populate: {
                logotype: {
                  fields: ['url', 'name', 'alternativeText'],
                },
              },
            },
            navbar: {
              populate: ['items'],
            },
            footer: {
              populate: {
                logotype: {
                  fields: ['url', 'name', 'alternativeText'],
                },
                linkGroups: {
                  populate: ['links'],
                },
                socials: true,
              },
            },
            settings: {
              populate: ['features'],
            },
          },
        })
        state.value = data
      })
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    } catch (e) {
      throw createError({
        statusCode: 503,
        statusMessage: 'Failed to fetch global model',
        message:
          'Please initialize the Global model before running the application',
      })
    }
  }

  const settings = computed(() => state.value.settings)

  const headerData = computed(() => state.value.header)
  const navbarData = computed(() => state.value.navbar)
  const footerData = computed(() => state.value.footer)

  return {
    settings,
    headerData,
    navbarData,
    footerData,
    fetchConfig,
  }
})
