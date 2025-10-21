import { getPayload } from 'payload'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'

import getI18n from '@/i18n/getI18n'
import Account from '@/components/Account/Account'
import HydrateClientUser from '@/components/HydrateClientUser'
import checkLoginToAccess from '@/components/Account/checkLoginToAccess'

export default async function AccountPage() {
  const { t } = await getI18n()
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { permissions, user } = await payload.auth({ headers })

  await checkLoginToAccess(user)

  return (
    <>
      <HydrateClientUser permissions={permissions} user={user} />
      <div className="container">
        <h1 className="font-medium text-3xl tracking-wider text-center whitespace-pre-wrap">
          {t('general:accountDashboard')}
        </h1>

        <Account />
      </div>
    </>
  )
}
