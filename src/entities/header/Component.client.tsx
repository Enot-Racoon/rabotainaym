'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode, useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo'
import { useHeaderTheme } from '@/providers/HeaderTheme'

import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
  selectRegion?: ReactNode
}

export const HeaderClient = ({ data, selectRegion }: HeaderClientProps) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

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
      </div>
    </header>
  )
}
