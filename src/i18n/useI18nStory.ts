import { useEffect, useState } from 'react'
import { type I18n, initI18n } from '@payloadcms/translations'

import i18n, { type TranslationsKeys, type TranslationsObject } from '@/i18n'

export default function useI18nStory() {
  const [client, setClient] = useState<I18n<TranslationsObject, TranslationsKeys> | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    void initI18n({
      context: 'client',
      language: 'ru',
      config: i18n,
    }).then((res) => {
      setClient(res as never)
      setLoading(false)
    })
  }, [])

  return { ...client, loading }
}
