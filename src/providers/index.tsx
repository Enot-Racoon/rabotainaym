import type { PropsWithChildren } from 'react'

import { I18nProvider } from './i18n'
import { ThemeProvider } from './Theme'
import { HeaderThemeProvider } from './HeaderTheme'

export const Providers = async ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <I18nProvider>{children}</I18nProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
