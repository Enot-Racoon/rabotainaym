import type { GroupField } from 'payload'

import { translateLabel } from '@/i18n'

const namecase: GroupField = {
  name: 'namecase',
  label: translateLabel('namecase:label'),
  type: 'group',
  fields: [
    {
      name: 'nominative',
      label: translateLabel('namecase:nominative'),
      type: 'text',
      required: true,
    },
    {
      name: 'genitive',
      label: translateLabel('namecase:genitive'),
      type: 'text',
      required: true,
    },
    {
      name: 'dative',
      label: translateLabel('namecase:dative'),
      type: 'text',
      required: true,
    },
    {
      name: 'accusative',
      label: translateLabel('namecase:accusative'),
      type: 'text',
      required: true,
    },
    {
      name: 'ablative',
      label: translateLabel('namecase:ablative'),
      type: 'text',
      required: true,
    },
    {
      name: 'prepositional',
      label: translateLabel('namecase:prepositional'),
      type: 'text',
      required: true,
    },
    {
      name: 'locative',
      label: translateLabel('namecase:locative'),
      type: 'text',
      required: true,
    },
  ],
}

export default namecase
