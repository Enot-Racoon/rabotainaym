import { getPayload } from 'payload'
import config from '@payload-config'
import { redirect } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'

import getI18n from '@/i18n/getI18n'
import Paths from '@/providers/Auth/paths'
import Account from '@/components/Account/Account'
import HydrateClientUser from '@/components/HydrateClientUser'

export default async function AccountPage() {
  const { t } = await getI18n()
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { permissions, user } = await payload.auth({ headers })

  if (!user) {
    redirect(
      `${Paths.page.login}?error=${encodeURIComponent(t('message:account:loginToAccessAccount'))}&redirect=/account`,
    )
  }

  return (
    <>
      <HydrateClientUser permissions={permissions} user={user} />
      <div className="container">
        <h2 className="text-center">{t('general:accountDashboard')}</h2>

        <Account />
      </div>
    </>
  )
}
