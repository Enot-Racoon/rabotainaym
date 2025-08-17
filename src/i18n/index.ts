import { enTranslations } from '@payloadcms/translations/languages/en'
import { ru as ruBaseTranslations, ruTranslations } from '@payloadcms/translations/languages/ru'
import {
  DefaultTranslationsObject,
  I18nOptions,
  NestedKeysStripped,
  TFunction,
} from '@payloadcms/translations'
import { LabelFunction } from 'payload'

import en from './en'
import ru from './ru'

type EnTranslationsObject = typeof en & typeof enTranslations
type RuTranslationsObject = typeof ru & typeof ruTranslations

export type TranslationsObject = EnTranslationsObject & RuTranslationsObject
export type TranslationsKeys = NestedKeysStripped<TranslationsObject>

export const translateLabel =
  (...args: Parameters<TFunction<TranslationsKeys>>): LabelFunction =>
  ({ t }) => {
    return (t as TFunction<TranslationsKeys>)(...args)
  }

const i18n: I18nOptions<object | DefaultTranslationsObject> = {
  fallbackLanguage: 'ru',
  translations: { en, ru },
  supportedLanguages: { ru: ruBaseTranslations },
} as const

export default i18n
