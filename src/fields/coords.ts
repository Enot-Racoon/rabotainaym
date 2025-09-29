import type { CollapsibleField, GroupField } from 'payload'

import { translateLabel } from '@/i18n'

const coords: GroupField = {
  label: '',
  type: 'group',
  name: 'coords',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'lat',
          label: translateLabel('coords:latitude'),
          type: 'number',
          admin: { width: '50%' },
        },
        {
          name: 'lon',
          label: translateLabel('coords:longitude'),
          type: 'number',
          admin: { width: '50%' },
        },
      ],
    },
  ],
}

const collapsible: CollapsibleField = {
  label: translateLabel('coords:label'),
  type: 'collapsible',
  fields: [coords],
}

export default collapsible
