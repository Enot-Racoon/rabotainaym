'use client'

import React from 'react'
import type { SanitizedPermissions } from 'payload'
import type { User } from '@/payload-types'

import api from './api'
import Paths from './paths'

import type { AuthContext, Create, ForgotPassword, Login, Logout, ResetPassword } from './types'

const Context = React.createContext({} as AuthContext)

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<null | User>()
  const [permissions, setPermissions] = React.useState<null | SanitizedPermissions>(null)

  const create = React.useCallback<Create>(async (args) => {
    const user = await api(Paths.api.user.create, args)
    setUser(user)
    return user!
  }, [])

  const login = React.useCallback<Login>(async (args) => {
    const user = await api(Paths.api.user.login, args)
    setUser(user)
    return user!
  }, [])

  const logout = React.useCallback<Logout>(async () => {
    await api(Paths.api.user.logout)
    setUser(null)
    return
  }, [])

  // On mount, get user and set
  React.useEffect(() => {
    const fetchMe = async () => {
      const user = await api(Paths.api.user.me, {}, { method: 'GET' })
      setUser(user)
    }

    void fetchMe()
  }, [])

  const forgotPassword = React.useCallback<ForgotPassword>(async (args) => {
    const user = await api(Paths.api.user.password.forgot, args)
    setUser(user)
    return user!
  }, [])

  const resetPassword = React.useCallback<ResetPassword>(async (args) => {
    const user = await api(Paths.api.user.password.reset, args)
    setUser(user)
    return user!
  }, [])

  return (
    <Context
      value={{
        create,
        forgotPassword,
        login,
        logout,
        permissions,
        resetPassword,
        setPermissions,
        setUser,
        user,
      }}
    >
      {children}
    </Context>
  )
}

export default AuthProvider

type UseAuth<T = User> = () => AuthContext

export const useAuth: UseAuth = () => React.use(Context)
