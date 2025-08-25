import type { User } from '@/payload-types'

export const checkRole = (
  roles: NonNullable<User['roles']> = [],
  user: User | null = null,
): boolean => {
  return !!user && roles.some((role) => user?.roles?.some((r) => r === role))
}
