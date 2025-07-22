import { useTranslation as useTranslationBase } from '@payloadcms/ui'
import { enTranslations } from '@payloadcms/translations/languages/en'
import { ru as ruBaseTranslations, ruTranslations } from '@payloadcms/translations/languages/ru'

import type { LabelFunction } from 'payload'
import type {
  DefaultTranslationsObject,
  I18nOptions,
  NestedKeysStripped,
  TFunction,
} from '@payloadcms/translations'

import en from './en'
import ru from './ru'

type EnTranslationsObject = typeof en & typeof enTranslations
type RuTranslationsObject = typeof ru & typeof ruTranslations

export type TranslationsObject = EnTranslationsObject & RuTranslationsObject
export type TranslationsKeys = NestedKeysStripped<TranslationsObject>

export const translate =
  (...args: Parameters<TFunction<TranslationsKeys>>): LabelFunction =>
  ({ t }) => {
    return (t as TFunction<TranslationsKeys>)(...args)
  }

export const useTranslation = () => {
  return useTranslationBase<TranslationsObject, TranslationsKeys>()
}

const i18n: I18nOptions<object | DefaultTranslationsObject> = {
  fallbackLanguage: 'ru',
  supportedLanguages: { ru: ruBaseTranslations },
  translations: { en, ru },
} as const

export default i18n
