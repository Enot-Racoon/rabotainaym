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
    },
    categories: {
      labels: {
        plural: 'Категории',
        singular: 'Категория',
      },
    },
  },
  general: { globals: 'Управление' },
} as const

export default ru
