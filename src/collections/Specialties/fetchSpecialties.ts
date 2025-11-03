import { cache } from 'react'
import { getPayload } from 'payload'

import configPromise from '@payload-config'

const fetchSpecialties = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'specialty-categories',
    select: {
      id: true,
      name: true,
      specialties: true,
    },
    populate: {
      specialties: {
        name: true,
      },
    },
    limit: 0,
  })

  return docs
})

export default fetchSpecialties
