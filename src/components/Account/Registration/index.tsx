'use server'

import React from 'react'

import getI18n from '@/i18n/getI18n'
import * as Tabs from '@/components/ui/tabs'
import { fetchRegions } from '@/collections/Regions'

import LegalEntity from './LegalEntity'
import SelfEmployed from './SelfEmployed'

export default async function RegistrationForm() {
  const { t } = await getI18n()
  const regions = await fetchRegions()

  return (
    <div>
      <Tabs.Tabs defaultValue="self-employed">
        <Tabs.TabsList className="inline-grid grid-cols-2 gap-x-[1px]">
          <Tabs.TabsTrigger value="self-employed">
            {t('pages:registration:as-self-employed')}
          </Tabs.TabsTrigger>

          <Tabs.TabsTrigger value="legal-entity">
            {t('pages:registration:as-legal-entity')}
          </Tabs.TabsTrigger>
        </Tabs.TabsList>

        <Tabs.TabsContent value="self-employed">
          <SelfEmployed regions={regions} />
        </Tabs.TabsContent>

        <Tabs.TabsContent value="legal-entity">
          <LegalEntity regions={regions} />
        </Tabs.TabsContent>
      </Tabs.Tabs>
    </div>
  )
}
