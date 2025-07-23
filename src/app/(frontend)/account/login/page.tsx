import configPromise from '@payload-config'
import { cookies as nextCookies, headers as getHeaders } from 'next/headers'
import { getRequestLanguage, type LanguageOptions, parseCookies } from 'payload'
import {
  type I18nClient,
  type I18nOptions,
  initI18n,
  type TFunction,
} from '@payloadcms/translations'

import { type TranslationsKeys } from '@/i18n'

import Login from '@/components/Account/Login'
import { TranslationProvider } from '@payloadcms/ui'

export default async function LoginPage() {
  async function switchLanguageServerAction(lang: string): Promise<void> {
    'use server'
    const cookies = await nextCookies()
    cookies.set({
      name: `${config.cookiePrefix || 'payload'}-lng`,
      path: '/',
      value: lang,
    })
  }

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
    config: config.i18n as I18nOptions,
    context: 'client',
    language: languageCode,
  })
  return (
    <div className="container">
      <div className="bordered">
        <h2 className="text-center">{(i18n.t as TFunction<TranslationsKeys>)('pages:login')}</h2>
        <TranslationProvider
          language={languageCode}
          dateFNSKey={i18n.dateFNSKey}
          languageOptions={languageOptions}
          fallbackLang={config.i18n.fallbackLanguage}
          translations={i18n.translations}
          switchLanguageServerAction={undefined as never}
        >
          <Login />
        </TranslationProvider>
      </div>
    </div>
  )
}
