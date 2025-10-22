import getI18n from '@/i18n/getI18n'
import PageHeader from '@/components/PageHeader'
import ProfileForm from '@/components/Account/Profile'
import PageMetaTitle from '@/components/PageMetaTitle'

export default async function AccountProfilePage() {
  const { t } = await getI18n()

  return (
    <div className="container">
      <PageMetaTitle>
        {t('general:my-profile')} - {t('general:appName')}
      </PageMetaTitle>
      <PageHeader>{t('general:my-profile')}</PageHeader>

      <div className="max-w-[880px] w-full mx-auto">
        <ProfileForm />
      </div>
    </div>
  )
}
