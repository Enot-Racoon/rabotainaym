import type { User } from '@/payload-types'
import type { PayloadMeUser } from '@payloadcms/admin-bar'

export const checkRole = (
  user: User | PayloadMeUser | null = null,
  ...roles: NonNullable<User['role']>[] | NonNullable<User['role']>[][]
): boolean => !!user && 'role' in user && roles.flat().includes(user?.role)
