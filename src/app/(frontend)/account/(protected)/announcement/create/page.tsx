import getI18n from '@/i18n/getI18n'
import PageHeader from '@/components/PageHeader'
import AnnouncementForm from '@/components/Announcements/form'
import PageMetaTitle from '@/components/PageMetaTitle'

export default async function CreateAnnouncementPage() {
  const { t } = await getI18n()

  // todo: i18n
  return (
    <div className="container">
      <PageMetaTitle>Мои объявления / Новое объявление - {t('app:appName')}</PageMetaTitle>
      <PageHeader>Мои объявления / Новое объявление</PageHeader>

      <AnnouncementForm />
    </div>
  )
}
