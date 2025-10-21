import getI18n from '@/i18n/getI18n'
import PageHeader from '@/components/PageHeader'
import AnnouncementForm from '@/components/Announcements/form'

export default async function CreateAnnouncementPage() {
  const { t } = await getI18n()

  // todo: i18n
  return (
    <div className="container">
      <title>Мои объявления / Новое объявление</title>
      <PageHeader>Мои объявления / Новое объявление</PageHeader>

      <AnnouncementForm />
    </div>
  )
}
