import { getPayload } from 'payload'
import { redirect } from 'next/navigation'
import type { PropsWithChildren } from 'react'
import { headers as getHeaders } from 'next/headers'

import Paths from '@/paths'
import config from '@payload-config'
import getI18n from '@/i18n/getI18n'

export default async function ProtectedAccountLayout({ children }: PropsWithChildren) {
  const { t } = await getI18n()
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (!user) {
    redirect(
      `${Paths.page.login}?error=${encodeURIComponent(t('message:account:loginToAccessAccount'))}&redirect=${Paths.page.account}`,
    )
  }

  return children
}
