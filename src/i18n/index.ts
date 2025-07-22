import { enTranslations } from '@payloadcms/translations/languages/en'
import { ruTranslations } from '@payloadcms/translations/languages/ru'
import { useTranslation as useTranslationBase } from '@payloadcms/ui'

import type { LabelFunction } from 'payload'
import type { NestedKeysStripped, TFunction } from '@payloadcms/translations'

import en from './en'
import ru from './ru'

const translations = { en, ru } as const

type EnTranslationsObject = typeof translations.en & typeof enTranslations
type RuTranslationsObject = typeof translations.ru & typeof ruTranslations

export type TranslationsObject = EnTranslationsObject & RuTranslationsObject
export type TranslationsKeys = NestedKeysStripped<TranslationsObject>

export const useTranslation = () => {
  return useTranslationBase<TranslationsObject, TranslationsKeys>()
}

export const translate =
  (...args: Parameters<TFunction<TranslationsKeys>>): LabelFunction =>
  ({ t }) => {
    return (t as TFunction<TranslationsKeys>)(...args)
  }

export default translations
