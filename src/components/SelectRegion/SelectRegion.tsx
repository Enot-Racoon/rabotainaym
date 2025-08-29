import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import getI18n from '@/i18n/getI18n'

import SelectRegionClient from './SelectRegion.client'

export default async function SelectRegion() {
  const { t } = await getI18n()
  const options = await getRegions()

  return <SelectRegionClient label={t('collections:regions:labels:singular')} options={options} />
}

const getRegions = cache(async () => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'regions',
  })

  return result.docs ?? []
})
