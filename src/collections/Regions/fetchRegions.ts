import { cache } from 'react'
import { getPayload } from 'payload'

import configPromise from '@payload-config'

const fetchRegions = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'regions',
    select: {
      id: true,
      fullname: true,
      localities: true,
    },
    populate: {
      localities: {
        name: true,
      },
    },
    limit: 0,
  })

  return docs
})

export default fetchRegions
