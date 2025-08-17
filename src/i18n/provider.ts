'use client'

import { createElement } from 'react'
import { TranslationProvider } from '@payloadcms/ui'

import type { ExtractComponentProps } from '@/components/types'

export type I18nProviderProps = ExtractComponentProps<typeof TranslationProvider>

const I18nProvider = (props: I18nProviderProps) => {
  return createElement(TranslationProvider, props, props.children)
}

export default I18nProvider
