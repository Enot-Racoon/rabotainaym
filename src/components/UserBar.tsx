'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import paths from '@/paths'
import useI18n from '@/i18n/useI18n'
import { useAuth } from '@/providers/Auth'
import { Button } from '@/components/ui/button'

const UserBar = ({ className }: WithClassName) => {
  const { t } = useI18n()
  const { user } = useAuth()
  const path = usePathname()

  return (
    <div className={['flex gap-6 md:items-center', className].filter(Boolean).join(' ')}>
      {!user ? (
        <>
          <Link href={paths.page.login}>
            <Button size="lg" variant="success" className="h-10 px-4 py-2 text-base">
              {t('pages:login:action')}
            </Button>
          </Link>
          <Link href={paths.page.registration}>
            <Button size="lg" variant="default" className="h-10 px-4 py-2 text-base">
              {t('pages:registration:action')}
            </Button>
          </Link>
        </>
      ) : (
        <>
          {path.startsWith(`${paths.page.account}`) ? (
            <div className="flex items-center gap-4">
              <Link href={`${paths.page.account.announcement}`}>{t('user-bar:announcements')}</Link>
              <Link href={`${paths.page.account.profile}`}>{t('user-bar:account')}</Link>
              <div className="bg-card rounded-md p-2 pl-3 flex gap-8">
                <div>
                  <div className="text-sm -mt-3 relative top-1 text-secondary">
                    {t('user-bar:balance')}:
                  </div>
                  <span className="text-destructive text-3xl font-medium mt-1 leading-6 inline-block d mr-2">
                    {user.balance}
                  </span>
                  <span>{t('user-bar:rub')}</span>
                </div>
                <Button variant="success" appearance="outlined">
                  {t('user-bar:refill')}
                </Button>
              </div>

              <Link href={paths.page.logout}>
                <Button variant="secondary" appearance="outlined">
                  {t('authentication:logout')}
                </Button>
              </Link>
            </div>
          ) : (
            <Link href={String(paths.page.account)}>
              <Button className="xl:px-16" size="lg" variant="success">
                {t('app:accountDashboard')}
              </Button>
            </Link>
          )}
        </>
      )}
    </div>
  )
}

export default UserBar
