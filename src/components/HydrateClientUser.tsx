'use client'

import React from 'react'
import type { PayloadRequest, SanitizedPermissions } from 'payload'

import { useAuth } from '@/providers/Auth'

const HydrateClientUser: React.FC<{
  permissions: SanitizedPermissions
  user: PayloadRequest['user']
}> = ({ permissions, user }) => {
  const { setPermissions, setUser } = useAuth()

  React.useEffect(() => {
    setUser(user)
    setPermissions(permissions)
  }, [user, permissions, setUser, setPermissions])

  return null
}

export default HydrateClientUser
