import getI18n from '@/i18n/getI18n'

import { fetchRegions } from '@/collections/Regions'

import SelectRegionClient from './SelectRegion.client'

export default async function SelectRegion() {
  const { t } = await getI18n()
  const regions = await fetchRegions()

  return <SelectRegionClient label={t('collections:regions:labels:singular')} options={regions} />
}
