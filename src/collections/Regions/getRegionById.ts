import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import type { Region } from '@/payload-types'

import publicFields from './publicFields'

export const getRegionById = cache(
  async (id: string | number): Promise<Pick<Region, (typeof publicFields)[number]>> => {
    const payload = await getPayload({ config: configPromise })

    return await payload.findByID({
      collection: 'regions',
      id,
      select: Object.fromEntries(publicFields.map((field) => [field, true])),
    })
  },
)

export default getRegionById
