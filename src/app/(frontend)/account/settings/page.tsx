import { getPayload } from 'payload'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'

import getI18n from '@/i18n/getI18n'

export default async function AccountPage() {
  const { t } = await getI18n()
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  // if (!user) {
  //   redirect(
  //     `${Paths.page.login}?error=${encodeURIComponent(t('message:account:loginToAccessAccount'))}&redirect=/account`,
  //   )
  // }

  return (
    <>
      {/* <HydrateClientUser permissions={permissions} user={user} /> */}
      <div className="container">
        <h1 className="font-medium text-3xl tracking-wider text-center whitespace-pre-wrap">
          {/* {t('general:accountDashboard')} */}
          Account / Settings
        </h1>

        {/* <Account /> */}
      </div>
    </>
  )
}
