const isDark = () => !!window?.matchMedia('(prefers-color-scheme: dark)').matches

/** @type {import('@ladle/react').UserConfig} */
const config = {
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
        open: true,
      },
    },
  },
  expandStoryTree: true,
}
export default config
