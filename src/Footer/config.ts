import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  label: 'Футер',
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      labels: {
        plural: 'Ссылки',
        singular: ({ i18n, t }) => {
          console.log('Ссылки', JSON.stringify(i18n.translations))
          return 'Ссылка'
        },
      },
      label: 'Ссылки',
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
