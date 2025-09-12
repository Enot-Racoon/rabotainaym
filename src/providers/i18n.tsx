import type { PropsWithChildren } from 'react'
import configPromise from '@payload-config'
import { cookies as nextCookies, headers as getHeaders } from 'next/headers'
import { getRequestLanguage, type LanguageOptions, parseCookies } from 'payload'
import { I18nClient, type I18nOptions, initI18n } from '@payloadcms/translations'

import Provider from '@/i18n/provider'

export const I18nProvider = async ({ children }: PropsWithChildren) => {
  const config = await configPromise
  const headers = await getHeaders()
  const cookies = parseCookies(headers)
  const languageCode = getRequestLanguage({ config, cookies, headers })

  const languageOptions: LanguageOptions = Object.entries(
    config.i18n.supportedLanguages || {},
  ).reduce((acc, [language, languageConfig]) => {
    if (Object.keys(config.i18n.supportedLanguages).includes(language)) {
      acc.push({
        label: languageConfig.translations.general.thisLanguage,
        value: language,
      } as never)
    }

    return acc
  }, [])

  const i18n: I18nClient = await initI18n({
    context: 'client',
    language: languageCode,
    config: config.i18n as I18nOptions,
  })

  async function switchLanguageServerAction(lang: string): Promise<void> {
    'use server'
    const cookies = await nextCookies()
    cookies.set({
      name: `${config.cookiePrefix || 'payload'}-lng`,
      path: '/',
      value: lang,
    })
  }

  return (
    <Provider
      language={languageCode}
      dateFNSKey={i18n.dateFNSKey}
      translations={i18n.translations}
      languageOptions={languageOptions}
      fallbackLang={config.i18n.fallbackLanguage}
      switchLanguageServerAction={switchLanguageServerAction}
    >
      {children}
    </Provider>
  )
}
