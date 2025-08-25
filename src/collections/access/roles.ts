import type { AccessArgs } from 'payload'
import type { User } from '@/payload-types'

export const roles =
  (...roles: NonNullable<User['roles']> | NonNullable<User['roles']>[]) =>
  ({ req: { user } }: AccessArgs) => {
    return !!user && roles.flat().some((role) => user?.roles?.some((r) => r === role))
  }
