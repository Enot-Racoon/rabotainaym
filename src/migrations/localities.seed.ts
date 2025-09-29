import type { MigrateUpArgs } from '@payloadcms/db-postgres'

import cities from './data/locations/cities'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  for (const city of cities) {
    await payload.create({
      collection: 'localities',
      data: {
        name: city.name,
        name_alt: city.name_alt,
        isCapital: city.isCapital,
        label: city.label,
        zip: city.zip,
        type: city.type,
        typeShort: city.typeShort,
        isDualName: city.isDualName,
        namecase: city.namecase,
        coords: city.coords,
        timezone: city.timezone,
      },
    })
  }
}

export async function down({ payload }: MigrateUpArgs): Promise<void> {
  await payload.delete({
    collection: 'localities',
    where: { id: { exists: true } },
  })
}
