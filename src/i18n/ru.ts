const ru = {
  pages: {
    login: 'Вход',
    registration: 'Регистрация',
  },
  plugins: {
    search: {
      label: 'Поиск',
    },
    redirects: {
      label: 'Редиректы',
    },
  },
  entities: {
    header: {
      label: 'Хедер',
    },
    footer: {
      label: 'Футер',
    },
  },
  collections: {
    pages: {
      labels: {
        plural: 'Страницы',
        singular: 'Страница',
      },
    },
    posts: {
      labels: {
        plural: 'Посты',
        singular: 'Пост',
      },
    },
    users: {
      labels: {
        plural: 'Пользователи',
        singular: 'Пользователь',
      },
      roles: {
        plural: 'Роли',
        singular: 'Роль',
        admin: 'Администратор',
        'self-employed': 'Cамозанятый',
        'legal-entity': 'Юр. лицо',
      },
    },
    categories: {
      labels: {
        plural: 'Категории',
        singular: 'Категория',
      },
    },
    regions: {
      labels: {
        plural: 'Регионы',
        singular: 'Регион',
      },
    },
  },
  theme: {
    auto: 'Авто',
    light: 'Светлая',
    dark: 'Тёмная',
  },
  general: {
    appName: 'Работа и найм',
    goHome: 'На главную',
    controlPanel: 'Личный кабинет',
    globals: 'Управление',
    country: 'Страна',
    latitude: 'Широта',
    longitude: 'Долгота',
    where: 'Где',
    surname: 'Фамилия',
    patronymic: 'Отчество',
    phone: 'Телефон',
    referrer: 'Реферал',
    theme: 'Тема',
  },
} as const

export type RuTranslation = typeof ru

export default ru
