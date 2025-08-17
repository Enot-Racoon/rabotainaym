import { useTranslation } from '@payloadcms/ui'
import type { TranslationsKeys, TranslationsObject } from '@/i18n'

const useI18n = () => {
  return useTranslation<TranslationsObject, TranslationsKeys>()
}

export default useI18n
