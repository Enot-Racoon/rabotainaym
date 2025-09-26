'use client'

import React from 'react'
import { useAuth } from '@/providers/Auth'
import Link from 'next/link'

// todo: i18n
export default function Logout() {
  const { logout } = useAuth()
  const [success, setSuccess] = React.useState('')
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('Logged out successfully.')
      } catch (_) {
        setError('You are already logged out.')
      }
    }

    void performLogout()
  }, [logout])

  return (
    <>
      {(error || success) && (
        <div>
          <h1 className="font-medium text-3xl tracking-wider text-center whitespace-pre-wrap">
            {error || success}
          </h1>
          <p>
            {'What would you like to do next? '}
            <Link className="text-primary" href="/">
              Click here
            </Link>
            {` to go to the home page. To log back in, `}
            <Link className="text-primary" href="/login">
              click here
            </Link>
            .
          </p>
        </div>
      )}
    </>
  )
}
