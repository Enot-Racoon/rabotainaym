import type { MigrateUpArgs } from '@payloadcms/db-postgres'
import { progressBar } from '@/migrations/utils'

import cities from './data/locations/cities'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  progressBar(0)
  for (const key in cities) {
    const city = cities[key]
    const response = await payload.find({
      collection: 'regions',
      where: {
        label: { equals: city.region.label },
      },
    })

    const region = response.docs[0]
    if (!region) throw new Error(`Region with label '${city.region.label}' not found`)

    await payload.create({
      collection: 'localities',
      data: {
        region: region.id,
        isCapital: city.isCapital,
        zip: city.zip,
        type: city.type,
        typeShort: city.typeShort,
        name: city.name,
        name_alt: city.name_alt,
        label: city.label,
        name_en: city.name_en,
        isDualName: city.isDualName,
        namecase: city.namecase,
        coords: city.coords,
        timezone: city.timezone,
      },
    })
    progressBar(Number(key), cities.length)
  }
}

export async function down({ payload }: MigrateUpArgs): Promise<void> {
  await payload.delete({
    collection: 'localities',
    where: { id: { exists: true } },
  })
}
