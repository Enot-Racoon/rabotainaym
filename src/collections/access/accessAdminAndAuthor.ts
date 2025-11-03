import type { AccessArgs, FieldAccess } from 'payload'
import { checkRole } from '@/collections/access/checkRole'

export const accessAdminAndAuthor = ({
  data,
  req: { user },
}: AccessArgs | Parameters<FieldAccess>[0]) => {
  return (
    checkRole(user, 'admin') ||
    (!!data && 'author' in data && !!user?.id && data.author === user.id)
  )
}
