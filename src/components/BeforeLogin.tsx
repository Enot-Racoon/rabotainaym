import React from 'react'
import getI18n from '@/i18n/getI18n'

const BeforeLogin: React.FC = async () => {
  const { t } = await getI18n()

  return (
    <div className="login__Logo">
      <img src="/logotype.svg" alt={t('general:appName')} />
    </div>
  )
}

export default BeforeLogin
