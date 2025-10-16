import { Button } from '@/components/ui/button'

import Empty from './empty.svg'
import paths from '@/providers/Auth/paths'
import Link from 'next/link'

const EmptyAnnouncements = () => {
  return (
    <div className="grid justify-center justify-items-center gap-6">
      <Empty />
      {/* todo: i18n */}
      <div className="text-secondary">Вы еще не создали ни одного объявления</div>
      <Link href={`${paths.page.account.announcements.create}`}>
        <Button variant="success" appearance="outlined" size="xl">
          + Создать объявление
        </Button>
      </Link>
    </div>
  )
}

export default EmptyAnnouncements
