import { type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

import regions from './data/locations/regions'
import { progressBar } from '@/migrations/utils'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  progressBar(0)
  for (const key in regions) {
    const region = regions[key]
    await db.execute(sql`
      INSERT INTO public.regions (district, "type", type_short, code, name, fullname, "label", name_en,
                                  namecase_nominative, namecase_genitive, namecase_dative, namecase_accusative,
                                  namecase_ablative, namecase_prepositional, namecase_locative)
      VALUES (${region.district}, ${region.type}, ${region.typeShort}, ${region.code}, ${region.name},
              ${region.fullname}, ${region.label}, ${region.name_en}, ${region.namecase.nominative},
              ${region.namecase.genitive}, ${region.namecase.dative}, ${region.namecase.accusative},
              ${region.namecase.ablative}, ${region.namecase.prepositional}, ${region.namecase.locative});
    `)
    progressBar(Number(key), regions.length)
  }
}

export async function down({ payload }: MigrateUpArgs): Promise<void> {
  await payload.delete({
    collection: 'regions',
    where: { id: { exists: true } },
  })
}
