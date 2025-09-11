const isDark = () => !!window?.matchMedia('(prefers-color-scheme: dark)').matches

/** @type {import('@ladle/react').UserConfig} */
const config = {
  viteConfig: process.cwd() + '/.ladle/ladle-vite.config.ts',
  stories: ['src/**/*.stories.{js,jsx,ts,tsx,mdx}', '.ladle/**/*.stories.{js,jsx,ts,tsx,mdx}'],
  addons: {
    theme: {
      enabled: true,
      defaultState: 'dark',
    },
    ladle: { enabled: false },
    mode: { enabled: false },
    rtl: { enabled: false },
    width: { enabled: false },
    control: {
      defaultState: {
        open: false,
      },
    },
  },
  expandStoryTree: true,
}
export default config
