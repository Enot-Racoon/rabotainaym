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
    account: '/account',
    login: '/account/login',
    logout: '/account/logout',
    registration: '/account/registration',
    announcements: '/account/announcements',
  },
} as const
