import type { AccessArgs } from 'payload'
import type { User } from '@/payload-types'

export const role =
  (...roles: NonNullable<User['role']>[] | NonNullable<User['role']>[][]) =>
  ({ req: { user } }: AccessArgs) =>
    !!user && roles.flat().includes(user?.role)
