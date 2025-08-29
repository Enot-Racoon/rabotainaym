import React, { useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const SelectCity = () => {
  const [city, setCity] = useState('msc')
  return (
    <Select onValueChange={setCity} value={city}>
      <SelectTrigger
        aria-label="Город"
        className="w-auto bg-transparent gap-2 pl-0 md:pl-3 focus:ring-transparent border-[#777]"
      >
        <SelectValue placeholder="Город" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="msc">Москва</SelectItem>
      </SelectContent>
    </Select>
  )
}
