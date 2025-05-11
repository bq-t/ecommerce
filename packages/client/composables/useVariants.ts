import { tv, type VariantProps } from 'tailwind-variants'

type TVSchema = Parameters<typeof tv>[0]

export const useVariants = <T extends TVSchema>(
  theme: T,
  opts?: VariantProps<ReturnType<typeof tv>>,
) => {
  const tvInstance = tv(theme)

  const options = reactive(opts || {})

  return computed(() => {
    const resolvedOptions = Object.fromEntries(
      Object.entries(options).map(([key, value]) => [key, toValue(value)]),
    )
    return tvInstance(resolvedOptions)
  })
}
