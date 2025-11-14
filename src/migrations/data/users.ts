import type { User as UserBase } from '@/payload-types'

type User = Omit<UserBase, 'id' | 'createdAt' | 'updatedAt'>
type SelfEmployedUserData = Pick<
  User,
  'name' | 'surname' | 'patronymic' | 'email' | 'phone' | 'role'
>
type LegalEntityUserData = SelfEmployedUserData & Pick<User, 'company'>
type UserTailData = Omit<User, keyof SelfEmployedUserData>

const adminPass = process.env.ADMIN_PASS
if (!adminPass) throw new Error(`Error migration, set env ADMIN_PASS for create default admin`)

const DEFAULT_PASSWORD = 'demo'

const admin: User = {
  region: 77,
  locality: 590,
  role: 'admin',
  balance: 999999,
  password: adminPass,
  name: 'Администратор',
  company: 'Rabota i nyam',
  phone: '+7 926 833 30 93',
  email: 'rabota-i-naim@ya.ru',
  avatar: null,
  surname: ' ',
  patronymic: ' ',
}

const SelfEmployedUsers: SelfEmployedUserData[] = [
  {
    name: 'Иван',
    surname: 'Искров',
    patronymic: 'Электрович',
    email: 'iskrov.volt@ya.ru',
    phone: '+7 (999) 220-22-10',
    role: 'self-employed',
  },
  {
    name: 'Семён',
    surname: 'Трубов',
    patronymic: 'Водопроводович',
    email: 'trubov.s@pochta.ru',
    phone: '+7 (988) 555-33-09',
    role: 'self-employed',
  },
  {
    name: 'Иван',
    surname: 'Грузов',
    patronymic: 'Сергеевич',
    email: 'ivan.gruzov@mailinator.com',
    phone: '+7 (777) 333-90-12',
    role: 'self-employed',
  },
  {
    name: 'Алекса',
    surname: 'Балансова',
    patronymic: 'Викторович',
    email: 'alex.balans@mailfake.com',
    phone: '+7 (666) 222-34-56',
    role: 'self-employed',
  },
  {
    name: 'Лиля',
    surname: 'Маскина',
    patronymic: 'Кремовна',
    email: 'beautyqueen@mockmail.com',
    phone: '+7 (999) 888-76-54',
    role: 'self-employed',
  },
]

const LegalEntityUsers: LegalEntityUserData[] = [
  {
    name: 'Ричи',
    surname: 'Голдман',
    patronymic: 'Сильверович',
    email: 'richi.gold@ya.ru',
    phone: '+7 (985) 254-48-13',
    company: 'ИП Голдман',
    role: 'legal-entity',
  },
]

const DEFAULT_USER_DATA: UserTailData = {
  balance: 0,
  region: 77,
  locality: 590,
  company: ' ',
  avatar: null,
  password: DEFAULT_PASSWORD,
}

const users: User[] = [
  admin,
  ...[...SelfEmployedUsers, ...LegalEntityUsers].map((entity) => ({
    ...DEFAULT_USER_DATA,
    ...entity,
  })),
]

export default users
