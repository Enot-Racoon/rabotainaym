import React, { JSX } from 'react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { Providers } from '@/providers'
import { AdminBar } from '@/components/AdminBar'
import { Header } from '@/entities/header/Component'
import { Footer } from '@/entities/footer/Component'
import { getServerSideURL } from '@/utilities/getURL'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

import '@/app/(frontend)/globals.css'

export default async function DefaultLayout({
  lang,
  children,
  ...props
}: JSX.IntrinsicElements['html']) {
  const { isEnabled } = await draftMode()

  // noinspection HtmlRequiredTitleElement
  return (
    <html {...props} lang={lang ?? 'ru'} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar adminBarProps={{ preview: isEnabled }} />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@rabotainaym',
  },
}
