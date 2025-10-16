'use client'

import React from 'react'
import Link from 'next/link'

import paths from '@/paths'
import useI18n from '@/i18n/useI18n'
import { Button } from '@/components/ui/button'

const Account = () => {
  const { t } = useI18n()

  return (
    <div className="space-y-8 mt-8">
      <div className="text-center grid gap-4">
        <Link href={paths.page.account.profile}>
          <Button variant="success" appearance="outlined" className="px-8" size="lg">
            {t('general:my-profile')}
          </Button>
        </Link>
        <Link href={paths.page.logout}>
          <Button variant="secondary" appearance="outlined" className="px-8" size="lg">
            {t('authentication:logout')}
          </Button>
        </Link>
      </div>
      {/* <pre className="bordered whitespace-pre-wrap">{JSON.stringify(useAuth().user, null, 2)}</pre> */}
    </div>
  )
}

export default Account
