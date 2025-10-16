import getI18n from '@/i18n/getI18n'
import AnnouncementForm from '@/components/Announcements/form'

export default async function CreateAnnouncementPage() {
  const { t } = await getI18n()

  return (
    <>
      <div className="container">
        <h1 className="font-medium text-3xl tracking-wider text-center whitespace-pre-wrap mb-14">
          {/* todo: i18n */}
          Мои объявления / Новое объявление
        </h1>

        <AnnouncementForm />
      </div>
    </>
  )
}
