'use server'

import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'

import { fetchRegions } from '@/collections/Regions'

import ProfileFormClient from './profile.client'

export default async function RegistrationForm() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })
  const regions = await fetchRegions()

  if (!user) return null

  return <ProfileFormClient user={user} regions={regions} />
}
