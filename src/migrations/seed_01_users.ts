import type { MigrateUpArgs } from '@payloadcms/db-postgres'
import type { User } from '@/payload-types'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  const adminPass = process.env.ADMIN_PASS
  if (!adminPass) throw new Error(`Error migration, set env ADMIN_PASS for create default admin`)

  const users: Omit<User, 'id' | 'createdAt' | 'updatedAt'>[] = [
    {
      avatar: null,
      balance: 999999,
      region: 77,
      locality: 590,
      email: 'rabota-i-naim@ya.ru',
      password: adminPass,
      surname: ' ',
      name: 'Администратор',
      patronymic: ' ',
      company: 'RabotaINyam.ru',
      phone: '+7 926 833 30 93',
      role: 'admin',
    },
    {
      avatar: null,
      balance: 0,
      region: 77,
      locality: 590,
      email: 'enotracoon2020@gmail.com',
      password: 'demo',
      surname: 'Трудяга',
      name: 'Егор',
      patronymic: 'Иванович',
      company: ' ',
      phone: '+7 926 833 33 33',
      role: 'self-employed',
    },
    {
      avatar: null,
      balance: 0,
      region: 77,
      locality: 590,
      email: 'a8333093@yandex.com',
      password: 'demo',
      surname: 'Работа',
      name: 'Егор',
      patronymic: 'Юрьевич',
      company: 'ИП Работа',
      phone: '+7 926 833 55 55',
      role: 'legal-entity',
    },
  ]

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
