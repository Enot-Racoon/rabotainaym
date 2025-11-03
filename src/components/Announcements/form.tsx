'use server'

import config from '@payload-config'
import { getPayload } from 'payload'
import { headers as getHeaders } from 'next/headers'

import type { Announcement } from '@/payload-types'

import { fetchRegions } from '@/collections/Regions'
import { fetchSpecialties } from '@/collections/Specialties'

import AnnouncementFormClient from './form.client'

const AnnouncementForm = async ({ initialValues }: { initialValues?: Announcement }) => {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })
  const regions = await fetchRegions()
  const specialties = await fetchSpecialties()

  if (!user) return null

  return (
    <AnnouncementFormClient
      user={user}
      regions={regions}
      specialties={specialties}
      initialValues={initialValues}
    />
  )
}

export default AnnouncementForm
