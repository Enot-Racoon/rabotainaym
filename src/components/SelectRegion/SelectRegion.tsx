import getI18n from '@/i18n/getI18n'

import { getRegions } from '@/collections/Regions'

import SelectRegionClient from './SelectRegion.client'

export default async function SelectRegion() {
  const { t } = await getI18n()
  const options = await getRegions()

  return <SelectRegionClient label={t('collections:regions:labels:singular')} options={options} />
}
