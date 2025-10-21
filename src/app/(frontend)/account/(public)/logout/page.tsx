import config from '@payload-config'
import { getPayload } from 'payload'
import { redirect } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'

import Logout from '@/components/Account/Logout'

export default async function LogoutPage() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (!user) redirect('/')

  return (
    <div className="container h-full">
      <Logout />
    </div>
  )
}
