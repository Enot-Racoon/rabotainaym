'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'

import useI18n from '@/i18n/useI18n'

import { useTheme } from '..'
import { themeLocalStorageKey } from './constants'

import type { Theme } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState('')
  const { t } = useI18n()

  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'light' /*  ?? 'auto' */)
  }, [])

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label={t('app:theme')}
        className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none"
      >
        <SelectValue placeholder={t('app:theme')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="auto">{t('theme:auto')}</SelectItem>
        <SelectItem value="light">{t('theme:light')}</SelectItem>
        <SelectItem value="dark">{t('theme:dark')}</SelectItem>
      </SelectContent>
    </Select>
  )
}
