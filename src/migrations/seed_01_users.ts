import type { MigrateUpArgs } from '@payloadcms/db-postgres'

import users from './data/users'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  const adminPass = process.env.ADMIN_PASS
  if (!adminPass) throw new Error(`Error migration, set env ADMIN_PASS for create default admin`)

  for (const data of users) {
    await payload.create({ collection: 'users', data })
  }
}

export async function down({ payload }: MigrateUpArgs): Promise<void> {
  await payload.delete({
    collection: 'users',
    where: { id: { exists: true } },
  })
}
