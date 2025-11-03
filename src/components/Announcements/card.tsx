'use client'
import Link from 'next/link'
import type { Announcement, Media, Region, User } from '@/payload-types'

import paths from '@/paths'
import { cn } from '@/utilities/ui'
import useI18n from '@/i18n/useI18n'
import Card from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatDateTime } from '@/utilities/formatDateTime'
import { printDays, printTime } from '@/components/Announcements/utils'

export interface AnnouncementCardProps {
  data: Announcement
}

const AnnouncementCard = ({ className, data }: WithClassName<AnnouncementCardProps>) => {
  const { t } = useI18n()
  return (
    <div className={cn('grid gap-2', className)}>
      <div className="h-[28px] flex justify-between">
        <div
          className={cn('flex rounded-full text-white items-center px-2 text-sm', {
            'bg-warning': data.status !== 'published' && data.status !== 'blocked',
            'bg-success': data.status === 'published',
            'bg-destructive': data.status === 'blocked',
          })}
        >
          {!!data.status && t(`collections:announcements:status:${data.status}`)}
        </div>
        <div className="flex items-center gap-2">
          <Link href={`${paths.page.account.announcements}/${data.id}`}>
            <Button size="xs" appearance="outlined">
              {t('actions:edit')}
            </Button>
          </Link>
          {(data.status === 'unpublished' || data.status === 'blocked') && (
            <Button
              size="xs"
              appearance="outlined"
              variant="success"
              disabled={data.status === 'blocked'}
            >
              {t('actions:publish')}
            </Button>
          )}
          {data.status === 'published' && (
            <Button size="xs" appearance="outlined" variant="success">
              {t('actions:view')}
            </Button>
          )}
          <Button size="xs" appearance="outlined" variant="danger">
            {t('actions:delete')}
          </Button>
        </div>
      </div>
      <div className="flex gap-5">
        <Card
          className={cn('min-h-40 w-full p-6 py-5 flex gap-8 border-2', {
            'border-warning': data.status !== 'published' && data.status !== 'blocked',
            'border-success': data.status === 'published',
            'border-destructive': data.status === 'blocked',
          })}
        >
          <div>
            <img
              className="block size-[158px] min-w-[158px] min-h-[158px] rounded-full bg-[pink]"
              src={((data.author as User)?.avatar as Media)?.url ?? undefined}
            />
          </div>
          <div className="grid gap-2 relative">
            <div className="absolute -right-1 -top-4 grid text-right">
              <div>{t('version:published')}</div>
              <div className="text-lg">{formatDateTime(data.createdAt)}</div>
            </div>
            <div className="grid gap-4">
              <div className="text-2xl font-medium text-foreground">
                {(data.author as User)?.name} {(data.author as User)?.surname}
              </div>
              <div>{data.skills}</div>
            </div>
            <div className="grid gap-2">
              <div className="text-md font-medium">{t('collections:announcements:images')}</div>
              <div className="overflow-scroll grid gap-4 grid-flow-col">
                {[...Array(5).keys()].map((key) => (
                  <div key={key} className="w-[172px] h-[124px] bg-[pink]" />
                ))}
              </div>
            </div>
          </div>
        </Card>
        <Card className="min-h-40 min-w-[280px] p-5 py-4">
          <div className="grid gap-4">
            <div>
              <div>{t('collections:regions:labels:singular')}</div>
              <div className="text-xl font-medium text-primary">
                {(data.region as Region)?.fullname}
              </div>
            </div>
            <div>
              <div>{t('collections:announcements:work-time')}</div>
              {/* todo: fix work time */}
              <div className="text-xl font-medium text-success">
                с {printTime(data.workTime?.start)}-{printTime(data.workTime?.end)}{' '}
                {printDays(t, data.workTime?.days)}
              </div>
            </div>
            <div>
              <div>{t('collections:users:phone')}</div>
              <div className="text-2xl font-medium text-success">
                {(data.author as User)?.phone}
              </div>
            </div>
            <div>
              <div>{t('collections:users:email')}</div>
              <div className="text-xl text-success truncate max-w-[240px]">
                {(data.author as User)?.email}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AnnouncementCard
