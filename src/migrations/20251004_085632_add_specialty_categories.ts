import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "specialty_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "specialties_rels" DROP CONSTRAINT "specialties_rels_specialties_fk";
  
  DROP INDEX "specialties_rels_specialties_id_idx";
  ALTER TABLE "specialties_rels" ADD COLUMN "specialty_categories_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "specialty_categories_id" integer;
  CREATE INDEX "specialty_categories_updated_at_idx" ON "specialty_categories" USING btree ("updated_at");
  CREATE INDEX "specialty_categories_created_at_idx" ON "specialty_categories" USING btree ("created_at");
  ALTER TABLE "specialties_rels" ADD CONSTRAINT "specialties_rels_specialty_categories_fk" FOREIGN KEY ("specialty_categories_id") REFERENCES "public"."specialty_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_specialty_categories_fk" FOREIGN KEY ("specialty_categories_id") REFERENCES "public"."specialty_categories"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "specialties_rels_specialty_categories_id_idx" ON "specialties_rels" USING btree ("specialty_categories_id");
  CREATE INDEX "payload_locked_documents_rels_specialty_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("specialty_categories_id");
  ALTER TABLE "specialties" DROP COLUMN "is_category";
  ALTER TABLE "specialties_rels" DROP COLUMN "specialties_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "specialty_categories" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "specialty_categories" CASCADE;
  ALTER TABLE "specialties_rels" RENAME COLUMN "specialty_categories_id" TO "specialties_id";
  ALTER TABLE "specialties_rels" DROP CONSTRAINT "specialties_rels_specialty_categories_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_specialty_categories_fk";
  
  DROP INDEX "specialties_rels_specialty_categories_id_idx";
  DROP INDEX "payload_locked_documents_rels_specialty_categories_id_idx";
  ALTER TABLE "specialties" ADD COLUMN "is_category" boolean;
  ALTER TABLE "specialties_rels" ADD CONSTRAINT "specialties_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "specialties_rels_specialties_id_idx" ON "specialties_rels" USING btree ("specialties_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "specialty_categories_id";`)
}
