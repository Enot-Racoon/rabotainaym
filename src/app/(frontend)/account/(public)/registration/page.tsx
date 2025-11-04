import getI18n from '@/i18n/getI18n'
import RegistrationForm from '@/components/Account/Registration'
import { headers as getHeaders } from 'next/dist/server/request/headers'
import { getPayload } from 'payload'
import config from '@payload-config'
import { redirect } from 'next/navigation'
import Paths from '@/paths'
import PageMetaTitle from '@/components/PageMetaTitle'
import React from 'react'

export default async function RegistrationPage() {
  const { t } = await getI18n()

  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (user) {
    redirect(
      `${Paths.page.account}?error=${encodeURIComponent(t('message:account:logoutToRegistration'))}&redirect=${Paths.page.account}`,
    )
  }

  return (
    <div className="container gap-10 grid mt-8 mb-48">
      <PageMetaTitle>
        {t('pages:registration:header')} - {t('general:appName')}
      </PageMetaTitle>
      <h1 className="font-medium text-3xl tracking-wider text-center">
        {t('pages:registration:header')}
      </h1>

      <div className="max-w-[880px] w-full mx-auto">
        <RegistrationForm />
      </div>
    </div>
  )
}
