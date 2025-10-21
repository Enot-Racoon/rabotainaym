import { getPayload } from 'payload'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'

import getI18n from '@/i18n/getI18n'
import Account from '@/components/Account/Account'
import HydrateClientUser from '@/components/HydrateClientUser'
import checkLoginToAccess from '@/components/Account/checkLoginToAccess'
import PageHeader from '@/components/PageHeader'

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
        <title>{t('general:accountDashboard')}</title>
        <PageHeader>{t('general:accountDashboard')}</PageHeader>

        <Account />
      </div>
    </>
  )
}
