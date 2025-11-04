import type { FieldHook } from 'payload'

import type { User } from '@/payload-types'

export const protectRole: FieldHook<{ id: string } & User> = ({
  data,
  req: { user },
}): User['role'] => {
  if (!data?.role) {
    throw new Error('Failure to update user, role required!')
  }

  if (user?.role === 'admin' && data?.id === user?.id) {
    return 'admin' // prevent current admin become not admin
  }

  return data.role
}
