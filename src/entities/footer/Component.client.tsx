'use client'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo'

export interface FooterClientProps {
  data: Footer
}

export const FooterClient = ({ data }: FooterClientProps) => {
  const navItems = data?.navItems || []

  return (
    <footer className="mt-auto bg-[#eee] text-[#444] dark:invert">
      <div className="container py-3 gap-4 flex items-center justify-between md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="md:flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          {process.env.NODE_ENV !== 'production' && <ThemeSelector />}
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
