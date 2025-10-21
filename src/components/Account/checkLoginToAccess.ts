'use server'

import { getPayload } from 'payload'
import { redirect } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'

import Paths from '@/paths'
import config from '@payload-config'
import getI18n from '@/i18n/getI18n'
import { User } from '@/payload-types'

export default async function checkLoginToAccess(user?: User | null) {
  if (user) return

  const { t } = await getI18n()
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const auth = await payload.auth({ headers })

  if (!auth.user) {
    redirect(
      `${Paths.page.login}?error=${encodeURIComponent(t('message:account:loginToAccessAccount'))}&redirect=${Paths.page.account}`,
    )
  }
}
