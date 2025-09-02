import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const getRegions = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({ collection: 'regions', limit: 0, sort: 'name' })

  return result.docs ?? []
})

export default getRegions
