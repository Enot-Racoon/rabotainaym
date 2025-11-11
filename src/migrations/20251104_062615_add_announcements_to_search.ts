import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "search_rels" ADD COLUMN "announcements_id" integer;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_announcements_fk" FOREIGN KEY ("announcements_id") REFERENCES "public"."announcements"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "search_rels_announcements_id_idx" ON "search_rels" USING btree ("announcements_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "search_rels" DROP CONSTRAINT "search_rels_announcements_fk";
  
  DROP INDEX "search_rels_announcements_id_idx";
  ALTER TABLE "search_rels" DROP COLUMN "announcements_id";`)
}
