import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "regions"
      ALTER COLUMN "capital_id" DROP NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "regions"
      ALTER COLUMN "capital_id" SET NOT NULL;`)
}
