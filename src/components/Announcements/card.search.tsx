'use client'
import type { Announcement, Media, Region, User } from '@/payload-types'
import { cn } from '@/utilities/ui'
import useI18n from '@/i18n/useI18n'
import Card from '@/components/ui/card'
import { formatDateTime } from '@/utilities/formatDateTime'
import { printDays, printTime } from '@/components/Announcements/utils'
import populate from '@/utilities/populate'

export interface AnnouncementSearchCardProps {
  data: Announcement
}

const AnnouncementSearchCard = ({
  className,
  data,
}: WithClassName<AnnouncementSearchCardProps>) => {
  const { t } = useI18n()
  return (
    <div className={cn('grid gap-2', className)}>
      <div className="flex gap-5">
        <Card
          className={cn(
            'min-h-40 w-full p-6 py-5 flex gap-8',
            /* ' border-2',  */ {
              // 'border-warning': data.status !== 'published' && data.status !== 'blocked',
              // 'border-success': data.status === 'published',
              // 'border-destructive': data.status === 'blocked',
            },
          )}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={[populate(data.author).name, populate(data.author).surname]
                .filter(Boolean)
                .join(' - ')}
              className="block size-[158px] min-w-[158px] min-h-[158px] rounded-full"
              src={((data.author as User)?.avatar as Media)?.url ?? '/avatar.svg'}
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

export default AnnouncementSearchCard
