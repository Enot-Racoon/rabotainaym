'use client'

import React from 'react'
import { useAuth } from '@/providers/Auth'
import { redirect } from 'next/navigation'

export default function Logout() {
  const { logout } = useAuth()

  React.useEffect(() => {
    void logout().then(() => redirect('/'))
  }, [logout])

  return (
    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
  )
}
