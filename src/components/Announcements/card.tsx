'use client'
import type { Announcement } from '@/payload-types'

import { cn } from '@/utilities/ui'
import useI18n from '@/i18n/useI18n'
import Card from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatDateTime } from '@/utilities/formatDateTime'

export interface AnnouncementCardProps {
  data: Announcement
}

const AnnouncementCard = ({ className, data }: WithClassName<AnnouncementCardProps>) => {
  const { t } = useI18n()
  return (
    <div className={cn('grid gap-2', className)}>
      <div className="h-[28px] flex justify-between">
        <div>TODO: STATUS</div>
        <div className="flex items-center gap-2">
          <Button size="xs" appearance="outlined">
            {t('actions:edit')}
          </Button>
          <Button size="xs" appearance="outlined" variant="success">
            {t('actions:publish')}
          </Button>
          <Button size="xs" appearance="outlined" variant="danger">
            {t('actions:delete')}
          </Button>
        </div>
      </div>
      <div className="flex gap-5">
        <Card className="min-h-40 w-full p-6 py-5 flex gap-8">
          <div>
            <div className="size-[158px] rounded-full bg-[pink]" />
          </div>
          <div className="grid gap-2 relative">
            <div className="absolute -right-1 -top-4 grid text-right">
              <div>{t('version:published')}</div>
              <div className="text-lg">{formatDateTime(data.createdAt)}</div>
            </div>
            <div className="grid gap-4">
              <div className="text-2xl font-medium text-foreground">Виталий Николаев</div>
              <div>
                Если у Вас протекли трубы, протечка к соседям, обращайтесь. Устраним протечку любой
                сложности. Устранение скрытых протечек, Монтаж ГВС, ХВС в помещении, технология
                Рехау. Многолетний опыт работы позволяет найти оптимальное решение, которое
                необходимо и которое вас устроит.
              </div>
            </div>
            <div className="grid gap-2">
              <div className="text-md font-medium">Фото работ</div>
              <div className="overflow-scroll grid gap-4 grid-flow-col">
                {[...Array(5)].map((key) => (
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
              <div className="text-xl font-medium text-primary">Москва</div>
            </div>
            <div>
              <div>Время работы</div>
              <div className="text-xl font-medium text-success">с 9-21 ежедневно</div>
            </div>
            <div>
              <div>Телефон</div>
              <div className="text-2xl font-medium text-success">+7 (555) 555-55-55</div>
            </div>
            <div>
              <div>E-mail</div>
              <div className="text-xl text-success">name@mail.ru</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AnnouncementCard
