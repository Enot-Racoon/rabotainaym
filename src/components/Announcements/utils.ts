import useI18n from '@/i18n/useI18n'
import type { Announcement } from '@/payload-types'

export const printTime = (time?: string | null) => {
  if (!time) return null

  const hours = time.substring(0, 2)
  const minutes = time.substring(2, 4)

  if (minutes[0] === '0') return hours
  return `${hours}:${minutes}`
}

export const printDays = (
  t: ReturnType<typeof useI18n>['t'],
  days?: NonNullable<Announcement['workTime']>['days'] | null,
) => {
  if (!days) return null
  const entries = Object.entries(days)

  if (entries.every(([, val]) => val)) return t('week-days:everyday')

  return entries
    .filter(([, val]) => val)
    .map(([key]) => t(`week-days:${key as never}`))
    .join()
}
