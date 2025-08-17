import configPromise from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { getRequestLanguage, parseCookies } from 'payload'
import { type I18nClient, type I18nOptions, initI18n } from '@payloadcms/translations'

import type { TranslationsKeys, TranslationsObject } from '@/i18n'

const i18nRef: { i18n: I18nClient<TranslationsObject, TranslationsKeys> | null } = { i18n: null }

const getI18n = async () => {
  if (!i18nRef.i18n) {
    const config = await configPromise
    const headers = await getHeaders()
    const cookies = parseCookies(headers)
    const languageCode = getRequestLanguage({ config, cookies, headers })

    i18nRef.i18n = (await initI18n({
      context: 'client',
      language: languageCode,
      config: config.i18n as I18nOptions,
    })) as I18nClient<TranslationsObject, TranslationsKeys>
  }

  return i18nRef.i18n
}

export default getI18n
