'use server'

import getI18n from '@/i18n/getI18n'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import Specialties from '@/components/Specialties'
import PageMetaTitle from '@/components/PageMetaTitle'

export default async function Home() {
  const { t } = await getI18n()
  return (
    <>
      <PageMetaTitle>{t('general:appName')}</PageMetaTitle>
      <Hero />
      <SearchBar />
      <div className="flex flex-col gap-4 items-center pt-5">
        <Specialties />
      </div>
    </>
  )
}
