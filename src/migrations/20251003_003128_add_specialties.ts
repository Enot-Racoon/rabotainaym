import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "specialties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"is_category" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "specialties_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"specialties_id" integer
  );
  
  ALTER TABLE "announcements" ADD COLUMN "region_id" integer NOT NULL;
  ALTER TABLE "announcements" ADD COLUMN "locality_id" integer NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "specialties_id" integer;
  ALTER TABLE "specialties_rels" ADD CONSTRAINT "specialties_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "specialties_rels" ADD CONSTRAINT "specialties_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "specialties_updated_at_idx" ON "specialties" USING btree ("updated_at");
  CREATE INDEX "specialties_created_at_idx" ON "specialties" USING btree ("created_at");
  CREATE INDEX "specialties_rels_order_idx" ON "specialties_rels" USING btree ("order");
  CREATE INDEX "specialties_rels_parent_idx" ON "specialties_rels" USING btree ("parent_id");
  CREATE INDEX "specialties_rels_path_idx" ON "specialties_rels" USING btree ("path");
  CREATE INDEX "specialties_rels_specialties_id_idx" ON "specialties_rels" USING btree ("specialties_id");
  ALTER TABLE "announcements" ADD CONSTRAINT "announcements_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "announcements" ADD CONSTRAINT "announcements_locality_id_localities_id_fk" FOREIGN KEY ("locality_id") REFERENCES "public"."localities"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "announcements_region_idx" ON "announcements" USING btree ("region_id");
  CREATE INDEX "announcements_locality_idx" ON "announcements" USING btree ("locality_id");
  CREATE INDEX "payload_locked_documents_rels_specialties_id_idx" ON "payload_locked_documents_rels" USING btree ("specialties_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "specialties" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "specialties_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "specialties" CASCADE;
  DROP TABLE "specialties_rels" CASCADE;
  ALTER TABLE "announcements" DROP CONSTRAINT "announcements_region_id_regions_id_fk";
  
  ALTER TABLE "announcements" DROP CONSTRAINT "announcements_locality_id_localities_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_specialties_fk";
  
  DROP INDEX "announcements_region_idx";
  DROP INDEX "announcements_locality_idx";
  DROP INDEX "payload_locked_documents_rels_specialties_id_idx";
  ALTER TABLE "announcements" DROP COLUMN "region_id";
  ALTER TABLE "announcements" DROP COLUMN "locality_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "specialties_id";`)
}
