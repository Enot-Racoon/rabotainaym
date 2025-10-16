import { getPayload } from 'payload'
import config from '@payload-config'
import { redirect } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'

import getI18n from '@/i18n/getI18n'
import Paths from '@/paths'
import LoginForm from '@/components/Account/Login'

export default async function LoginPage() {
  const { t } = await getI18n()
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (user) {
    redirect(
      `${Paths.page.account}?message=${encodeURIComponent(t('message:account:already-logged-in'))}&redirect=${Paths.page.account}`,
    )
  }

  return <LoginForm />
}
