import React, { useState } from 'react'

import Select from '@/components/ui/select'

export const SelectCity = () => {
  const [city, setCity] = useState('msc')
  return (
    <Select onValueChange={setCity} value={city}>
      <Select.Trigger
        aria-label="Город"
        className="w-auto bg-transparent gap-2 pl-0 md:pl-3 focus:ring-transparent border-[#777]"
      >
        <Select.Value placeholder="Город" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="msc">Москва</Select.Item>
      </Select.Content>
    </Select>
  )
}
