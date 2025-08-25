const ru = {
  pages: {
    login: 'Вход',
  },
  plugins: {
    search: {
      label: 'Поиск',
    },
    redirects: {
      label: 'Редиректы',
    },
  },
  collections: {
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
  general: {
    globals: 'Управление',
    country: 'Страна',
    latitude: 'Широта',
    longitude: 'Долгота',
    where: 'Где',
  },
} as const

export default ru
