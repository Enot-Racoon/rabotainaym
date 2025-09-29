import type { CollapsibleField, GroupField } from 'payload'

import { translateLabel } from '@/i18n'

const timezone: GroupField = {
  label: '',
  name: 'timezone',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'tzid',
          label: translateLabel('timezone:tzid'),
          type: 'text',
          admin: { width: '50%' },
        },
        {
          name: 'utcOffset',
          label: translateLabel('timezone:utcOffset'),
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'abbreviation',
          label: translateLabel('timezone:abbreviation'),
          type: 'text',
          admin: { width: '50%' },
        },
        {
          name: 'mskOffset',
          label: translateLabel('timezone:mskOffset'),
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
  ],
}

const collapsible: CollapsibleField = {
  label: translateLabel('timezone:label'),
  type: 'collapsible',
  fields: [timezone],
}

export default collapsible
