import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers as getHeaders } from 'next/headers'

import paths from '@/paths'
import getI18n from '@/i18n/getI18n'
import PageHeader from '@/components/PageHeader'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import AnnouncementForm from '@/components/Announcements/form'
import PageMetaTitle from '@/components/PageMetaTitle'

type Args = {
  params: Promise<{
    id?: string | number
  }>
}

export default async function AnnouncementEditPage({ params: paramsPromise }: Args) {
  const { t } = await getI18n()
  const { id = '' } = await paramsPromise
  const url = [paths.page.account.announcement, id].join('/')

  if (!id) return <PayloadRedirects url={url} />
  const announcement = await queryAnnouncementById(id)
  if (!announcement) return <PayloadRedirects url={url} />

  // todo: i18n
  return (
    <div className="container">
      <PageMetaTitle>Мои объявления / Редактировать объявление - {t('app:appName')}</PageMetaTitle>
      <PageHeader>Мои объявления / Редактировать объявление</PageHeader>

      <AnnouncementForm initialValues={announcement} />
    </div>
  )
}

const queryAnnouncementById = cache(async (id: string | number) => {
  const headers = await getHeaders()
  const payload = await getPayload({ config: configPromise })
  const { user } = await payload.auth({ headers })

  const result = await payload.find({
    collection: 'announcements',
    where: {
      and: [{ id: { equals: id } }, { author: { equals: user?.id } }],
    },
  })

  return result.docs?.[0] || null
})
