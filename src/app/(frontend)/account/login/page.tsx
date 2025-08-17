import getI18n from '@/i18n/getI18n'

export default async function LoginPage() {
  const { t } = await getI18n()

  return (
    <div className="container">
      {/* <h2 className="text-center">{t('pages:login')}</h2> */}

      <br />
      <img className="block mx-auto cursor-pointer" src="/login.svg" />
    </div>
  )
}
