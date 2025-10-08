import React from 'react'
import Link from 'next/link'

import getI18n from '@/i18n/getI18n'

const BeforeLogin: React.FC = async () => {
  const { t } = await getI18n()

  return (
    <div className="login__Logo">
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logotype.svg" alt={t('general:appName')} />
      </Link>
    </div>
  )
}

export default BeforeLogin
