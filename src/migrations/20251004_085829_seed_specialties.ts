import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { progressBar } from './utils'
import specialties from './data/specialties'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  // 1. Normalizing the data
  const normalizedCategories: { name: string }[] = []
  const normalizedSpecialties = new Map<string, { name: string; categories: string[] }>()

  for (const category of specialties.categories) {
    normalizedCategories.push({ name: category.name })

    for (const spec of category.specialties) {
      const existing = normalizedSpecialties.get(spec.name)
      if (!existing) {
        normalizedSpecialties.set(spec.name, {
          name: spec.name,
          categories: [category.name],
        })
      } else {
        existing.categories.push(category.name)
      }
    }
  }

  // 2. Now we know the total
  const total = normalizedCategories.length + normalizedSpecialties.size

  let passed = 0
  progressBar(passed, total)

  // 3. Create categories → remember IDs
  const categoryIds = new Map<string, number>()

  for (const cat of normalizedCategories) {
    const created = await payload.create({
      collection: 'specialty-categories',
      data: { name: cat.name },
    })

    categoryIds.set(cat.name, created.id)
    progressBar(passed++, total)
  }

  // 4. We create specialties with the correct category IDs
  for (const spec of normalizedSpecialties.values()) {
    const categoryIdList = spec.categories.map((name) => categoryIds.get(name)!)

    await payload.create({
      collection: 'specialties',
      data: {
        name: spec.name,
        category: categoryIdList,
      },
    })

    progressBar(passed++, total)
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
