import type { MigrateUpArgs } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  const adminPass = process.env.ADMIN_PASS
  if (!adminPass) throw new Error(`Error migration, set env ADMIN_PASS for create default admin`)

  await payload.create({
    collection: 'users',
    data: {
      email: 'rabota-i-naim@ya.ru',
      password: adminPass,
      surname: ' ',
      name: 'Администратор',
      patronymic: ' ',
      company: ' ',
      phone: '+7 926 833 30 93',
      roles: ['admin', 'self-employed', 'legal-entity'],
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'enotracoon2020@gmail.com',
      password: 'demo',
      surname: 'Фамилия самозанятого',
      name: 'Самозанятый',
      patronymic: ' ',
      company: ' ',
      phone: '+7 926 833 33 32',
      roles: ['self-employed'],
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'a8333093@yandex.com',
      password: 'demo',
      surname: 'Фамилия юр.лица',
      name: 'Юр.лицо',
      patronymic: ' ',
      company: ' ',
      phone: '+7 926 833 33 33',
      roles: ['legal-entity'],
    },
  })
}

export async function down({ payload }: MigrateUpArgs): Promise<void> {
  await payload.delete({
    collection: 'users',
    where: { id: { exists: true } },
  })
}
