import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import type { Announcement as AnnouncementBase } from '@/payload-types'

type Announcement = Omit<AnnouncementBase, 'id' | 'createdAt' | 'updatedAt'>
type AnnouncementHead = Pick<Announcement, 'title' | 'skills' | 'specialty' | 'author'>
type AnnouncementTail = Omit<Announcement, keyof AnnouncementHead>

const DEFAULT_ANNOUNCEMENT_DATA: AnnouncementTail = {
  region: 50,
  locality: 655,
  status: 'published',
  workTime: {
    start: '0900',
    end: '1200',
    days: { mon: true, tue: true, wed: true, thu: true, fri: true },
  },
}

const announcementsData: AnnouncementHead[] = [
  {
    author: 2,
    specialty: 124,
    title: 'Ваш домашний мастер по электричеству',
    skills:
      'Подключу лампочки, розетки и даже ваш холодильник к сети без единого искрения! Люблю ток во всех его проявлениях. Гарантирую, что после меня свет будет всегда!',
  },
  {
    author: 3,
    specialty: 121,
    title: 'Сантехнические чудеса за один звонок',
    skills:
      'Прочищу любую трубу и остановлю любой потоп! Мастер на все ручки и вентильные дела. Даже у вашей ванны появится настроение!',
  },
  {
    author: 4,
    specialty: 125,
    title: 'Переезды без стресса и потерь',
    skills:
      'Подниму, перенесу, аккуратно уложу! Даже холодильник весом с вашего соседа не проблема. Сила + юмор = качественная работа!',
  },
  {
    author: 5,
    specialty: 165,
    title: 'Ваш порядок в цифрах и документах',
    skills:
      'Считаю цифры быстрее, чем вы успеете сказать «налоговая». Все отчёты в порядке, даже если ваша бухгалтерия в хаосе. Плюс могу шутку про дебет и кредит!',
  },
  {
    author: 6,
    specialty: 138,
    title: 'Сияние и красота каждый день',
    skills:
      'Сделаю вашу кожу сияющей, как солнечный зайчик! Маски, скрабы и кремы – всё для вашего идеального отражения в зеркале. Гарантированный эффект «вау»!',
  },
]

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  const announcements = announcementsData.map((entity) => ({
    ...DEFAULT_ANNOUNCEMENT_DATA,
    ...entity,
  }))

  for (const announcement of announcements) {
    await payload.create({
      collection: 'announcements',
      data: announcement,
    })
  }
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'announcements',
    where: { id: { exists: true } },
  })
}
