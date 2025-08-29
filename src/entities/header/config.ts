import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { translateLabel } from '@/i18n'

import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  label: translateLabel('entities:header:label'),
  access: { read: () => true },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [link({ appearances: false })],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/entities/header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: { afterChange: [revalidateHeader] },
}
