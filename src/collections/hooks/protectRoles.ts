import type { FieldHook } from 'payload'

import type { User } from '@/payload-types'

export const protectRoles: FieldHook<{ id: string } & User> = ({
  data,
  req: { user },
}): User['roles'] => {
  const userRoles = new Set(data?.roles ?? [])

  if (user?.roles?.includes('admin') && data?.id === user?.id) {
    userRoles.add('admin') // prevent current admin become not admin
  }

  return [...userRoles]
}
