import useI18n from '@/i18n/useI18n'
import type { Announcement } from '@/payload-types'

export const printTime = (time?: string | null) => {
  if (!time) return null

  const hours = time.substring(0, 2)
  const minutes = time.substring(2, 4)

  if (minutes[0] === '0') return hours
  return `${hours}:${minutes}`
}

export const printDaysOld = (
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

type WeekDays = NonNullable<NonNullable<Announcement['workTime']>['days']>
type WeekDayKey = keyof WeekDays

export const printDays = (
  t: ReturnType<typeof useI18n>['t'],
  week: WeekDays | undefined,
): string => {
  if (!week) return ''
  const dayKeys = Object.keys(week) as WeekDayKey[]
  const flags = dayKeys.map((k) => Boolean(week[k]))

  if (flags.every((v) => !v)) return ''
  if (flags.every(Boolean)) return t('week-days:everyday')
  if (flags.slice(0, 5).every(Boolean) && !flags[5] && !flags[6]) return t('week-days:workdays')
  if (!flags.slice(0, 5).some(Boolean) && flags[5] && flags[6]) return t('week-days:holidays')

  const segments: [WeekDayKey, WeekDayKey][] = []
  let i = 0
  while (i < 7) {
    if (!flags[i]) {
      i++
      continue
    }
    const start = i
    while (i + 1 < 7 && flags[i + 1]) i++
    const end = i
    segments.push([dayKeys[start], dayKeys[end]])
    i++
  }

  const parts = segments.map(([start, end]) =>
    start === end
      ? t(`week-days:${start}`)
      : [t(`week-days:${start}`), t(`week-days:${end}`)].join('-'),
  )

  return parts.join(', ')
}
