import type { PropsWithChildren } from 'react'

import AuthProvider from './Auth'
import { I18nProvider } from './i18n'
import { ThemeProvider } from './Theme'
import { HeaderThemeProvider } from './HeaderTheme'

export const Providers = async ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <I18nProvider>
          <AuthProvider>{children}</AuthProvider>
        </I18nProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
