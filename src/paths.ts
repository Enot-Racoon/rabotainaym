export default {
  api: {
    user: {
      me: '/api/users/me',
      create: '/api/users',
      login: '/api/users/login',
      logout: '/api/users/logout',
      password: {
        forgot: '/api/users/forgot-password',
        reset: '/api/users/reset-password',
      },
    },
  },

  page: {
    category: '/category',
    specialty: '/specialty',
    account: {
      toString: () => '/account',
      announcement: {
        toString: () => '/account/announcement',
        create: '/account/announcement/create',
      },
      profile: '/account/profile',
    },
    login: '/account/login',
    logout: '/account/logout',
    registration: '/account/registration',
    search: '/search',
  },
} as const
