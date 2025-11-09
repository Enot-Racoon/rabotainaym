'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { type ReactNode, useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import useI18n from '@/i18n/useI18n'
import { Logo } from '@/components/Logo'
import UserBar from '@/components/UserBar'
import { useAuth } from '@/providers/Auth'
import { useHeaderTheme } from '@/providers/HeaderTheme'

import { HeaderNav } from './Nav'
import Drawer from '@/components/Drawer'

interface HeaderClientProps {
  data: Header
  selectRegion?: ReactNode
}

export const HeaderClient = ({ data, selectRegion }: HeaderClientProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useI18n()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <div className="py-3 flex justify-between gap-4 flex-1">
        <div className="order-2 flex gap-6 items-center flex-1 justify-between md:justify-start">
          <Link href="/">
            <Logo loading="eager" priority="high" />
          </Link>
          {selectRegion}
        </div>

        <HeaderNav data={data} />

        <Drawer className="order-1 md:order-3">
          <UserBar className="flex-col md:flex-row items-start" />
        </Drawer>
      </div>
    </header>
  )
}
