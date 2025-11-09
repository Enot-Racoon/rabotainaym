'use client'
import { type MouseEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import Paths from '@/paths'
import { cn } from '@/utilities/ui'
import useI18n from '@/i18n/useI18n'
import Tabs from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SearchBar({ className }: WithClassName) {
  const { t } = useI18n()
  const [query, setQuery] = useState('')
  const router = useRouter()

  const search = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.length) router.push(`${Paths.page.search}?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className={cn('bg-card flex flex-col gap-4 items-center pb-5', className)}>
      <div className="container">
        <div className="flex w-full gap-5">
          <Tabs defaultValue="self-employed" className="w-full">
            <Tabs.List className="flex hidden flex-col items-stretch md:inline-grid grid-cols-2 gap-x-[1px] *:px-2 md:*:px-10">
              <Tabs.Trigger className="md:px-[78px] bg-success" value="self-employed">
                {t('actions:find-work')}
              </Tabs.Trigger>
              <Tabs.Trigger className="!bg-primary" value="legal-entity">
                {t('actions:find-employee')}
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="self-employed">
              <form className="flex flex-col md:flex-row w-full gap-5" onSubmit={search}>
                <Input
                  value={query}
                  className="w-full"
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('form:placeholders:search-bar')}
                />
                <Button type="submit" variant="warning" size="xl" className="px-[60px]">
                  {t('actions:find')}
                </Button>
              </form>
            </Tabs.Content>
            <Tabs.Content value="legal-entity">
              <form className="flex flex-col md:flex-row w-full gap-5" onSubmit={search}>
                <Input
                  value={query}
                  className="w-full"
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('form:placeholders:search-bar')}
                />
                <Button type="submit" variant="warning" size="xl" className="px-[60px]">
                  {t('actions:find')}
                </Button>
              </form>
            </Tabs.Content>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
