import type { User } from '@/payload-types'
import type { PayloadMeUser } from '@payloadcms/admin-bar'

export const checkRole = (
  user: User | PayloadMeUser | null = null,
  ...roles: NonNullable<User['roles']> | NonNullable<User['roles']>[]
): boolean => {
  return (
    !!user && 'roles' in user && roles.flat().some((role) => user?.roles?.some((r) => r === role))
  )
}
