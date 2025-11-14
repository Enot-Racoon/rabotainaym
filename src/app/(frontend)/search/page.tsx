import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import PageMetaTitle from '@/components/PageMetaTitle'
import getI18n from '@/i18n/getI18n'
import AnnouncementCardSearch from '@/components/Announcements/card.search'

type Args = {
  searchParams: Promise<{
    q: string
  }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { t } = await getI18n()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })
  // const posts = await payload.find({
  //   collection: 'search',
  //   depth: 1,
  //   limit: 12,
  //   select: {
  //     title: true,
  //     slug: true,
  //     categories: true,
  //     meta: true,
  //   },
  //   // pagination: false reduces overhead if you don't need totalDocs
  //   pagination: false,
  //   ...(query
  //     ? {
  //         where: {
  //           or: [
  //             { title: { like: query } },
  //             { 'meta.description': { like: query } },
  //             { 'meta.title': { like: query } },
  //             { slug: { like: query } },
  //           ],
  //         },
  //       }
  //     : {}),
  // })
  const announcements = await payload.find({
    collection: 'announcements',
    pagination: false,
  })

  // todo: i18n
  return (
    <div className="pt-14 pb-24">
      <PageMetaTitle>Поиск - {t('app:appName')}</PageMetaTitle>
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h1 className="mb-8 lg:mb-16">Поиск</h1>

          <div className="max-w-[50rem] mx-auto">
            <Search />
          </div>
        </div>
      </div>

      {announcements.totalDocs > 0 ? (
        <>
          <div className="container">
            <div className="grid gap-[60px]">
              {(announcements.docs ?? []).map((announcement) => (
                <AnnouncementCardSearch key={announcement.id} data={announcement} />
              ))}
            </div>
          </div>
          {/* <CollectionArchive posts={posts.docs as CardPostData[]} /> */}
        </>
      ) : (
        /* todo: i18n */ <div className="container">Ничего не найдено</div>
      )}
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n()
  return {
    title: `Поиск - ${t('app:appName')}`,
  }
}
