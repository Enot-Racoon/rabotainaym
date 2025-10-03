import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import type { Config } from 'payload'
import { buildConfig, PayloadRequest } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

import i18n from '@/i18n'
import { plugins } from '@/plugins'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Posts } from '@/collections/Posts'
import { Users } from '@/collections/Users'
import { Footer } from '@/entities/footer/config'
import { Header } from '@/entities/header/config'
import Regions from '@/collections/Regions/index'
import Localities from '@/collections/Localities'
import Specialties from '@/collections/Specialties'
import SpecialtyCategories from '@/collections/SpecialtyCategories'
import Announcements from '@/collections/Announcements'
import { Categories } from '@/collections/Categories'
import { getServerSideURL } from '@/utilities/getURL'
import { defaultLexical } from '@/fields/defaultLexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

type SupportedLanguages = NonNullable<Config['i18n']>['supportedLanguages']

export default buildConfig({
  email: nodemailerAdapter({
    defaultFromAddress: 'info@rabotainaym.ru',
    defaultFromName: 'Rabotainaym.ru',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  i18n: {
    fallbackLanguage: i18n.fallbackLanguage,
    translations: i18n.translations,
    supportedLanguages: i18n.supportedLanguages as SupportedLanguages,
  },
  admin: {
    dateFormat: 'do MMMM yyyy, HH:mm',
    avatar: {
      Component: {
        clientProps: { size: 36 },
        path: '@/components/Avatar#default',
      },
    },
    components: {
      graphics: {
        Icon: {
          path: '@payloadcms/ui#PayloadIcon',
        },
      },
      // views: {
      //   login: {
      //     Component: '@/views/Login/index#LoginView',
      //     path: '/signin',
      //   },
      // },
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'], // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  }, // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [
    Announcements,
    Specialties,
    SpecialtyCategories,
    Regions,
    Localities,
    Pages,
    Posts,
    Media,
    Categories,
    Users,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged-in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged-in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
