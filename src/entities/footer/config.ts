import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { translateLabel } from '@/i18n'

import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  label: translateLabel('entities:footer:label'),
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      labels: {
        plural: 'Ссылки',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        singular: ({ i18n, t }) => {
          // console.log('Ссылки', JSON.stringify(i18n.translations))
          return 'Ссылка'
        },
      },
      label: 'Ссылки',
      name: 'navItems',
      type: 'array',
      fields: [link({ appearances: false })],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/entities/footer/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: { afterChange: [revalidateFooter] },
}
