import { cache } from 'react'

import cities from './cities'
import regions from './regions'

import type { City, Region } from './types'

export const getCitiesByRegionCode = cache((code: Region['code']): City[] => {
  return cities.filter((city) => city.region.code == code)
})

export { cities, regions }
