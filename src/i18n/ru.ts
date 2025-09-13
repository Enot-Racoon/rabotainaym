const ru = {
  pages: {
    login: {
      header: 'Вход в личный кабинет',
      action: 'Войти',
    },
    registration: {
      header: 'Регистрация соискателя',
      action: 'Зарегистрироваться',
      'as-self-employed': 'Я ищу работу',
      'as-legal-entity': 'Я предлагаю работу',
    },
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
  form: {
    labels: {
      email: 'E-mail',
      location: 'Населенный пункт',
      phone: 'Мобильный телефон',
      agreePPD: 'Я даю согласие на обработку моих личных данных',
    },
    placeholders: {
      email: {
        login: 'E-mail указанный при регистрации',
        registration: 'Ваша электронная почта',
      },
      region: 'Выберите Ваш регион',
      location: 'Выберите Ваш населённый пункт',
      surname: 'Ваша фамилия',
      name: 'Ваше имя',
      phone: '+7 (ххх) ххх-хх-хх',
    },
    errors: {
      email: {
        invalid: 'Неправильный e-mail',
      },
      agreePPD: 'Необходимо подтвердить согласие',
    },
  },
} as const

export type RuTranslation = typeof ru

export default ru
