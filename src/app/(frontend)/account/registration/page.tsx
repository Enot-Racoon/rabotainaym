import getI18n from '@/i18n/getI18n'
import RegistrationForm from '@/components/Account/Registration'

export default async function RegistrationPage() {
  const { t } = await getI18n()
  return (
    <div className="container gap-10 justify-center grid mt-8 mb-48">
      <h1 className="font-medium text-3xl tracking-wider text-center">
        {t('pages:registration:header')}
      </h1>

      <RegistrationForm />

      <img className="block mx-auto cursor-pointer" src="/registration.svg" alt="" />
    </div>
  )
}
