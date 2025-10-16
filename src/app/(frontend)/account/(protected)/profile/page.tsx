import getI18n from '@/i18n/getI18n'

export default async function AccountPage() {
  const { t } = await getI18n()

  return (
    <div className="container">
      <h1 className="font-medium text-3xl tracking-wider text-center whitespace-pre-wrap mb-14">
        {t('general:my-profile')}
      </h1>

      {/* <Account /> */}
    </div>
  )
}
