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

  const { docs } = await payload.find({
    collection: 'specialty-categories',
    limit: 0,
  })

  const specialties = docs.map(({ specialties, ...specialty }) => ({
    ...specialty,
    specialties: specialties?.docs,
  }))

  const announcements = (
    await payload.find({
      collection: 'announcements',
      limit: 0,
    })
  ).docs

  return (
    <>
      <HydrateClientUser permissions={permissions} user={user} />
      <div className="container">
        <h1 className="font-medium text-3xl tracking-wider text-center whitespace-pre-wrap">
          {t('general:accountDashboard')}
        </h1>
        <div className="grid gap-[60px]">
          {announcements.concat(announcements).map((announcement, idx) => (
            <AnnouncementCard key={[announcement.id, idx].join()} data={announcement} />
          ))}
        </div>
      </div>
    </>
  )
}
