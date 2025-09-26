import type { AccessArgs } from 'payload'

import { checkRole } from './checkRole'

export const admins = ({ req: { user } }: AccessArgs) => checkRole(user, 'admin')
