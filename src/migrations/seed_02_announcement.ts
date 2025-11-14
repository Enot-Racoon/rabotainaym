import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.create({
    collection: 'announcements',
    data: {
      status: 'published',
      author: 2,
      region: 50,
      locality: 655,
      specialty: 174,
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
      status: 'published',
      author: 2,
      region: 50,
      locality: 655,
      specialty: 174,
      title: 'Решении проблем с электрикой, в жилых помещениях и квартирах',
      skills:
        'Если у Вас проблемы с электрикой — короткое замыкание, выбивает автоматы, не работает розетка или свет — обращайтесь. Выполним электромонтаж любой сложности. Диагностика и устранение скрытых неисправностей, монтаж электропроводки в помещении, установка розеток, выключателей, щитов и освещения. Работаю по современным технологиям и стандартам безопасности. Многолетний опыт позволяет найти оптимальное решение — надёжное, безопасное и удобное именно для вас.',
      workTime: {
        start: '1230',
        end: '1830',
        days: { sat: true, sun: true },
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
