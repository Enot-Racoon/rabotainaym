import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import getI18n from '@/i18n/getI18n'

export default async function NotFound() {
  const { t } = await getI18n()
  return (
    <div className="container py-28 text-center">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">Страница не найдена.</p>
      </div>
      <Button asChild variant="success">
        <Link href="/">{t('general:goHome')}</Link>
      </Button>
    </div>
  )
}
