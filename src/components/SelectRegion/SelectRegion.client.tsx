'use client'

import React, { useState } from 'react'
import { Region } from '@/payload-types'

import Select from '@/components/ui/select'

export interface SelectRegionClient {
  label: string
  options: Region[]
}

export default function SelectRegionClient({ label, options }: SelectRegionClient) {
  const [regionId, setRegionId] = useState('77')

  return (
    <Select onValueChange={setRegionId} value={regionId}>
      <Select.Trigger
        aria-label={label}
        className="w-auto xl:min-w-48 bg-transparent gap-2 pl-0 md:pl-3 focus:ring-transparent border-[#777]"
      >
        <Select.Value placeholder={label} />
      </Select.Trigger>
      <Select.Content>
        {options.map(({ id, fullname }) => (
          <Select.Item key={id} value={String(id)}>
            {fullname}
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  )
}
