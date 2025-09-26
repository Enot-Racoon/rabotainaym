'use client'

import React from 'react'

import useI18n from '@/i18n/useI18n'
// import { useAuth } from '@/providers/Auth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Account = () => {
  const { t } = useI18n()

  return (
    <div className="space-y-8 mt-8">
      <div className="text-center">
        <Link href="/account/logout">
          <Button className="px-8" size="lg">
            {t('authentication:logout')}
          </Button>
        </Link>
      </div>
      {/* <pre className="bordered whitespace-pre-wrap">{JSON.stringify(useAuth().user, null, 2)}</pre> */}
    </div>
  )
}

export default Account
