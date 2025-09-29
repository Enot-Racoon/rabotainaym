import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

import regions from './data/locations/regions'

export async function up({ db, payload }: MigrateUpArgs): Promise<void> {
  for (const region of regions) {
    const response = await payload.find({
      collection: 'localities',
      where: {
        label: { equals: region.capital?.label },
      },
    })
    const [capital] = response.docs

    if (!capital) {
      console.log({ region })
      throw new Error(`City with label "${region.capital?.label}" not found`)
    }

    await payload.update({
      collection: 'regions',
      data: {
        capital: capital.id,
      },
      where: {
        label: { equals: region.label },
      },
    })
  }

  await db.execute(sql`
    ALTER TABLE "regions"
      ALTER COLUMN "capital_id" SET NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "regions"
      ALTER COLUMN "capital_id" DROP NOT NULL;`)
}
