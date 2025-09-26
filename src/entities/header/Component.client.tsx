'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { type ReactNode, useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import useI18n from '@/i18n/useI18n'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { useHeaderTheme } from '@/providers/HeaderTheme'

import { HeaderNav } from './Nav'
import { useAuth } from '@/providers/Auth'

interface HeaderClientProps {
  data: Header
  selectRegion?: ReactNode
}

export const HeaderClient = ({ data, selectRegion }: HeaderClientProps) => {
  const { t } = useI18n()
  const { user } = useAuth()
  const pathname = usePathname()
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="container relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-3 flex justify-between">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <Logo loading="eager" priority="high" />
          </Link>
          {selectRegion}
        </div>

        <HeaderNav data={data} />

        {!user ? (
          <div className="flex gap-6 items-center">
            <Link href="/account/login">
              <Button size="lg" variant="success">
                {t('pages:login:action')}
              </Button>
            </Link>
            <Link href="/account/registration">
              <Button size="lg" variant="default">
                {t('pages:registration:action')}
              </Button>
            </Link>
          </div>
        ) : (
          <Link href="/account">
            <Button className="xl:px-16" size="lg" variant="success">
              {t('general:accountDashboard')}
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}
