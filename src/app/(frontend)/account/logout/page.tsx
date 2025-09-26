import Link from 'next/link'
import config from '@payload-config'
import { getPayload } from 'payload'
import { headers as getHeaders } from 'next/headers'

import getI18n from '@/i18n/getI18n'
import Logout from '@/components/Account/Logout'

// todo: i18n
export default async function LogoutPage() {
  const { t } = await getI18n()
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (!user) {
    return (
      <div className="container h-full">
        <h1>You are already logged out.</h1>
        <p>
          {'What would you like to do next? '}
          <Link className="text-primary" href="/">
            Click here
          </Link>
          {` to go to the home page. To log back in, `}
          <Link className="text-primary" href="/account/login">
            click here
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="container h-full">
      <Logout />
    </div>
  )
}
