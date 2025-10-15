import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.create({
    collection: 'announcements',
    data: {
      author: 2,
      region: 50,
      locality: 655,
      specialty: 226,
      title: 'Решении проблем с сантехникой, в жилых помещениях и квартирах',
      skills:
        'Если у Вас протекли трубы, протечка к соседям, обращайтесь. Устраним протечку любой сложности. Устранение скрытых протечек, Монтаж ГВС, ХВС в помещении, технология Рехау. Многолетний опыт работы позволяет найти оптимальное решение, которое необходимо и которое вас устроит.',
      workTime: {
        start: '0900',
        end: '1200',
        days: { mon: true, tue: true, wed: true, thu: true, fri: true },
      },
    },
  })
  await payload.create({
    collection: 'announcements',
    data: {
      author: 2,
      region: 50,
      locality: 655,
      specialty: 226,
      title: 'Решении проблем с электрикой, в жилых помещениях и квартирах',
      skills:
        'Если у Вас протекли трубы, протечка к соседям, обращайтесь. Устраним протечку любой сложности. Устранение скрытых протечек, Монтаж ГВС, ХВС в помещении, технология Рехау. Многолетний опыт работы позволяет найти оптимальное решение, которое необходимо и которое вас устроит.',
      workTime: {
        start: '1230',
        end: '1830',
        days: { mon: true, tue: true, wed: true, thu: true, fri: true },
      },
    },
  })
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'announcements',
    where: { id: { exists: true } },
  })
}
