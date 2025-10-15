import { getPayload } from 'payload'
import config from '@payload-config'
import { redirect } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'

import getI18n from '@/i18n/getI18n'
import Paths from '@/providers/Auth/paths'
import HydrateClientUser from '@/components/HydrateClientUser'
import AnnouncementCard from '@/components/Announcements/card'

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

  const announcements = (
    await payload.find({
      collection: 'announcements',
      limit: 0,
      where: {
        author: { equals: user.id },
      },
    })
  ).docs

  return (
    <>
      <title>{t('pages:announcement:title')}</title>
      <HydrateClientUser permissions={permissions} user={user} />
      <div className="container">
        <h1 className="font-medium text-3xl tracking-wider text-center whitespace-pre-wrap">
          {t('pages:announcement:header')}
        </h1>
        <div className="grid gap-[60px]">
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.id} data={announcement} />
          ))}
        </div>
      </div>
    </>
  )
}
