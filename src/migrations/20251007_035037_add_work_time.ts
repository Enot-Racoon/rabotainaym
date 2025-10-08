import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_announcements_work_time_start" AS ENUM('0000', '0030', '0100', '0130', '0200', '0230', '0300', '0330', '0400', '0430', '0500', '0530', '0600', '0630', '0700', '0730', '0800', '0830', '0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230', '1300', '1330', '1400', '1430', '1500', '1530', '1600', '1630', '1700', '1730', '1800', '1830', '1900', '1930', '2000', '2030', '2100', '2130', '2200', '2230', '2300', '2330');
  CREATE TYPE "public"."enum_announcements_work_time_end" AS ENUM('0000', '0030', '0100', '0130', '0200', '0230', '0300', '0330', '0400', '0430', '0500', '0530', '0600', '0630', '0700', '0730', '0800', '0830', '0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230', '1300', '1330', '1400', '1430', '1500', '1530', '1600', '1630', '1700', '1730', '1800', '1830', '1900', '1930', '2000', '2030', '2100', '2130', '2200', '2230', '2300', '2330');
  CREATE TABLE "announcements_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  ALTER TABLE "announcements" ADD COLUMN "specialty_id" integer NOT NULL;
  ALTER TABLE "announcements" ADD COLUMN "work_time_start" "enum_announcements_work_time_start";
  ALTER TABLE "announcements" ADD COLUMN "work_time_end" "enum_announcements_work_time_end";
  ALTER TABLE "announcements" ADD COLUMN "work_time_days_mon" boolean;
  ALTER TABLE "announcements" ADD COLUMN "work_time_days_tue" boolean;
  ALTER TABLE "announcements" ADD COLUMN "work_time_days_wed" boolean;
  ALTER TABLE "announcements" ADD COLUMN "work_time_days_thu" boolean;
  ALTER TABLE "announcements" ADD COLUMN "work_time_days_fri" boolean;
  ALTER TABLE "announcements" ADD COLUMN "work_time_days_sat" boolean;
  ALTER TABLE "announcements_rels" ADD CONSTRAINT "announcements_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."announcements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "announcements_rels" ADD CONSTRAINT "announcements_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "announcements_rels_order_idx" ON "announcements_rels" USING btree ("order");
  CREATE INDEX "announcements_rels_parent_idx" ON "announcements_rels" USING btree ("parent_id");
  CREATE INDEX "announcements_rels_path_idx" ON "announcements_rels" USING btree ("path");
  CREATE INDEX "announcements_rels_media_id_idx" ON "announcements_rels" USING btree ("media_id");
  ALTER TABLE "announcements" ADD CONSTRAINT "announcements_specialty_id_specialties_id_fk" FOREIGN KEY ("specialty_id") REFERENCES "public"."specialties"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "announcements_specialty_idx" ON "announcements" USING btree ("specialty_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "announcements_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "announcements_rels" CASCADE;
  ALTER TABLE "announcements" DROP CONSTRAINT "announcements_specialty_id_specialties_id_fk";
  
  DROP INDEX "announcements_specialty_idx";
  ALTER TABLE "announcements" DROP COLUMN "specialty_id";
  ALTER TABLE "announcements" DROP COLUMN "work_time_start";
  ALTER TABLE "announcements" DROP COLUMN "work_time_end";
  ALTER TABLE "announcements" DROP COLUMN "work_time_days_mon";
  ALTER TABLE "announcements" DROP COLUMN "work_time_days_tue";
  ALTER TABLE "announcements" DROP COLUMN "work_time_days_wed";
  ALTER TABLE "announcements" DROP COLUMN "work_time_days_thu";
  ALTER TABLE "announcements" DROP COLUMN "work_time_days_fri";
  ALTER TABLE "announcements" DROP COLUMN "work_time_days_sat";
  DROP TYPE "public"."enum_announcements_work_time_start";
  DROP TYPE "public"."enum_announcements_work_time_end";`)
}
