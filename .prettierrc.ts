import type { Config } from 'prettier'

const config: Config = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ["*.yml"],
      options: {
        singleQuote: false,
      },
    },
  ],
}

export default config