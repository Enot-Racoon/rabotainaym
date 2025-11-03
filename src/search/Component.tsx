'use client'
import React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const Search: React.FC = () => {
  const [value, setValue] = React.useState('')
  const router = useRouter()

  const debouncedValue = useDebounce(value)

  React.useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ''}`)
  }, [debouncedValue, router])

  // todo: i18n
  return (
    <div>
      <form onSubmit={(e) => void e.preventDefault()}>
        <Label htmlFor="search" className="sr-only">
          Поиск
        </Label>
        <Input
          id="search"
          placeholder="Поиск"
          className="border-2 border-border"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" className="sr-only">
          submit
        </Button>
      </form>
    </div>
  )
}
