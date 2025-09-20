'use client'

import React from 'react'
import useI18n from '@/i18n/useI18n'
import Tabs from '@/components/ui/tabs'

import LegalEntity from './LegalEntity'
import SelfEmployed from './SelfEmployed'

export default function RegistrationForm() {
  const { t } = useI18n()
  return (
    <div className="">
      <Tabs defaultValue="self-employed">
        <Tabs.List className="inline-grid grid-cols-2 gap-x-[1px]">
          <Tabs.Trigger value="self-employed">
            {t('pages:registration:as-self-employed')}
          </Tabs.Trigger>
          <Tabs.Trigger value="legal-entity">
            {t('pages:registration:as-legal-entity')}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="self-employed">
          <SelfEmployed />
        </Tabs.Content>
        <Tabs.Content value="legal-entity">
          <LegalEntity />
        </Tabs.Content>
      </Tabs>
    </div>
  )
}
