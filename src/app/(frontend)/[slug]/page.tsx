import type { Metadata } from 'next'

import { cache } from 'react'
import { draftMode } from 'next/headers'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'

import { Media } from '@/components/Media'
import Specialties from 'src/components/Specialties'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Home from '@/app/(frontend)/[slug]/home'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return pages.docs //
    ?.filter((doc) => doc.slug !== 'home')
    ?.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{ slug?: string }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = await paramsPromise

  const isHome = slug === 'home'

  if (isHome) {
    return <Home />
  }

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({ slug })

  const url = '/' + slug
  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { layout, banner } = page

  return (
    <div className="grid gap-6 mb-48">
      {banner && (
        <div className="w-full grid justify-center bg-[#e8e8e8] py-8">
          <div className="container relative flex justify-end">
            <Media resource={banner} className="mt-10 w-[920px]" />
            <div className="absolute left-0 top-0">
              <div className="text-[#444] text-[40px] leading-[1.4] w-[680px]">
                Тысячи объявлений поиска работы и сотрудников
                <br /> в России
              </div>
              <button className="mt-[14px] rounded border-2 border-[#EF5E54] text-[#EF5E54] px-[26px] py-[18px] font-semibold text-2xl leading-none">
                Подать объявление
              </button>
            </div>
          </div>
          <div className="">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/search.svg" alt="" />
          </div>
        </div>
      )}
      <PayloadRedirects disableNotFound url={url} />
      <article>
        {draft && <LivePreviewListener />}
        <RenderBlocks blocks={layout} />
        {isHome && <Specialties />}
      </article>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({ slug })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: { equals: slug },
    },
  })

  return result.docs?.[0] || null
})
