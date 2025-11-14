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

  await payload.update({
    id: 3,
    collection: 'announcements',
    data: {
      images: await seedImages(payload, [
        {
          path: './data/announcement/g1.jpeg',
          alt: 'Фото услуги грузчика',
        },
        {
          path: './data/announcement/g2.jpeg',
          alt: 'Фото услуги грузчика',
        },
        {
          path: './data/announcement/g3.jpeg',
          alt: 'Фото услуги грузчика',
        },
        {
          path: './data/announcement/g4.jpeg',
          alt: 'Фото услуги грузчика',
        },
        {
          path: './data/announcement/g5.jpeg',
          alt: 'Фото услуги грузчика',
        },
      ]),
    },
  })

  await payload.update({
    id: 4,
    collection: 'announcements',
    data: {
      images: await seedImages(payload, [
        {
          path: './data/announcement/b1.jpeg',
          alt: 'Фото услуги бухгалтера',
        },
        {
          path: './data/announcement/b2.jpeg',
          alt: 'Фото услуги бухгалтера',
        },
        {
          path: './data/announcement/b3.jpeg',
          alt: 'Фото услуги бухгалтера',
        },
        {
          path: './data/announcement/b4.jpeg',
          alt: 'Фото услуги бухгалтера',
        },
        {
          path: './data/announcement/b5.jpeg',
          alt: 'Фото услуги бухгалтера',
        },
      ]),
    },
  })

  await payload.update({
    id: 5,
    collection: 'announcements',
    data: {
      images: await seedImages(payload, [
        {
          path: './data/announcement/k1.jpeg',
          alt: 'Фото услуги косметолога',
        },
        {
          path: './data/announcement/k2.jpeg',
          alt: 'Фото услуги косметолога',
        },
        {
          path: './data/announcement/k3.jpeg',
          alt: 'Фото услуги косметолога',
        },
        {
          path: './data/announcement/k4.jpeg',
          alt: 'Фото услуги косметолога',
        },
        {
          path: './data/announcement/k5.jpeg',
          alt: 'Фото услуги косметолога',
        },
      ]),
    },
  })
}

export async function down({}: MigrateDownArgs): Promise<void> {
  // todo: Migration down code
}
