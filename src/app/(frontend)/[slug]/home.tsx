'use server'

import Specialties from '@/components/Specialties'
import SearchBar from '@/components/SearchBar'
import Hero from '@/components/Hero'

export default async function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <div className="flex flex-col gap-4 items-center pt-5">
        <Specialties />
      </div>
    </>
  )
}
