import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'

import paths from '@/paths'
import getI18n from '@/i18n/getI18n'
import { Button } from '@/components/ui/button'
import PageHeader from '@/components/PageHeader'
import PageMetaTitle from '@/components/PageMetaTitle'
import HydrateClientUser from '@/components/HydrateClientUser'
import AnnouncementCard from '@/components/Announcements/card'
import EmptyAnnouncements from '@/components/Announcements/empty'

export default async function AnnouncementsPage() {
  const { t } = await getI18n()
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { permissions, user } = await payload.auth({ headers })

  if (!user) return null

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
      <HydrateClientUser permissions={permissions} user={user} />
      <div className="container">
        <PageMetaTitle>
          {t('pages:announcement:title')} - {t('general:appName')}
        </PageMetaTitle>
        <PageHeader>{t('pages:announcement:header')}</PageHeader>

        <div className="grid gap-[60px]">
          {!announcements.length ? (
            <EmptyAnnouncements />
          ) : (
            <>
              {announcements.map((announcement) => (
                <AnnouncementCard key={announcement.id} data={announcement} />
              ))}
              <Link className="mx-auto" href={`${paths.page.account.announcements.create}`}>
                <Button variant="success" appearance="outlined" size="xl">
                  + Создать объявление
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}
