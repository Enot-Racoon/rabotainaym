import React from 'react'
import type { Header } from '@/payload-types'

import SelectRegion from '@/components/SelectRegion'
import { getCachedGlobal } from '@/utilities/getGlobals'

import { HeaderClient } from './Component.client'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData} selectRegion={<SelectRegion />} />
}
