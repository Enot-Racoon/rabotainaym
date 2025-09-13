import getI18n from '@/i18n/getI18n'
import LoginForm from '@/components/Account/Login'
import LoginIcon from '@/components/Account/login.svg'

export default async function LoginPage() {
  const { t } = await getI18n()

  return (
    <div className="container gap-10 justify-center grid mt-8 mb-48">
      <LoginIcon className="mx-auto" />

      <h1 className="font-medium text-3xl tracking-wider text-center">{t('pages:login:header')}</h1>

      <LoginForm />
    </div>
  )
}
