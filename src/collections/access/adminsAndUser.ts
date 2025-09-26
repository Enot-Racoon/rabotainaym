import type { AccessArgs, FieldAccess } from 'payload'

import { checkRole } from './checkRole'

export const adminsAndUser = ({
  req: { user },
  id,
}: AccessArgs | Parameters<FieldAccess>[0]): boolean => {
  return checkRole(user, 'admin') || id === user?.id
}
