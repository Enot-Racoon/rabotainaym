'use client'

import useI18n from '@/i18n/useI18n'

export default function Login() {
  const { t } = useI18n()
  return (
    <div className="bordered">
      <title>Login</title>
      <h2 className="text-center">Login Form</h2>
      <div className="p-4 bordered">{t('pages:login')}</div>
      <div>
        <label>
          Email: <input />
        </label>
      </div>
      <div>
        <label>
          Password: <input />
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  )
}
