import getI18n from '@/i18n/getI18n'
import PageHeader from '@/components/PageHeader'
import ProfileForm from '@/components/Account/Profile'

export default async function AccountProfilePage() {
  const { t } = await getI18n()

  return (
    <div className="container">
      <title>{t('general:my-profile')}</title>
      <PageHeader>{t('general:my-profile')}</PageHeader>

      <div className="max-w-[880px] w-full mx-auto">
        <ProfileForm />
      </div>
    </div>
  )
}
