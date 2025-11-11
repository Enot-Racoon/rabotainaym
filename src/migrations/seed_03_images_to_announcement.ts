import { seedImages } from './utils'
import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.update({
    id: 1,
    collection: 'announcements',
    data: {
      images: await seedImages(payload, [
        {
          path: './data/announcement/e1.jpeg',
          alt: 'Электромонтажные работы фото услуги электрика',
        },
        {
          path: './data/announcement/e2.jpeg',
          alt: 'Электромонтажные работы фото услуги электрика',
        },
        {
          path: './data/announcement/e3.jpeg',
          alt: 'Электромонтажные работы фото услуги электрика',
        },
        {
          path: './data/announcement/e4.jpeg',
          alt: 'Электромонтажные работы фото услуги электрика',
        },
        {
          path: './data/announcement/e5.jpeg',
          alt: 'Электромонтажные работы фото услуги электрика',
        },
      ]),
    },
  })

  await payload.update({
    id: 2,
    collection: 'announcements',
    data: {
      images: await seedImages(payload, [
        {
          path: './data/announcement/s1.jpeg',
          alt: 'Сантехнические работы фото услуги сантехника',
        },
        {
          path: './data/announcement/s2.jpeg',
          alt: 'Сантехнические работы фото услуги сантехника',
        },
        {
          path: './data/announcement/s3.jpeg',
          alt: 'Сантехнические работы фото услуги сантехника',
        },
        {
          path: './data/announcement/s4.jpeg',
          alt: 'Сантехнические работы фото услуги сантехника',
        },
        {
          path: './data/announcement/s5.jpeg',
          alt: 'Сантехнические работы фото услуги сантехника',
        },
      ]),
    },
  })
}

export async function down({}: MigrateDownArgs): Promise<void> {
  // todo: Migration down code
}
