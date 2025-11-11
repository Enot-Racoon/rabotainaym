import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import specialties from './data/specialties'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  for (const category of specialties.categories) {
    // add category
    const newCategory = await payload.create({
      collection: 'specialty-categories',
      data: {
        name: category.name,
      },
    })

    for (const specialty of category.specialties) {
      // add specialty
      await payload.create({
        collection: 'specialties',
        data: {
          name: specialty.name,
          category: [newCategory.id],
        },
      })
    }
  }
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'specialties',
    where: { id: { exists: true } },
  })
  await payload.delete({
    collection: 'specialty-categories',
    where: { id: { exists: true } },
  })
}
