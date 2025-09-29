import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import coords from '@/fields/coords'
import timezone from '@/fields/timezone'
import namecase from '@/fields/namecase'
import { admins } from '@/collections/access/admins'
import { anyone } from '@/collections/access/anyone'

const Localities: CollectionConfig = {
  slug: 'localities',
  access: {
    read: anyone,
    create: admins,
    update: admins,
    delete: admins,
    unlock: admins,
    admin: admins,
  },
  defaultSort: 'name',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
  },
  labels: {
    plural: translateLabel('collections:localities:labels:plural'),
    singular: translateLabel('collections:localities:labels:singular'),
  },
  fields: [
    {
      name: 'region',
      label: translateLabel('collections:localities:region'),
      type: 'relationship',
      relationTo: 'regions',
      // required: true,
    },
    {
      name: 'isCapital',
      type: 'checkbox',
      label: translateLabel('collections:localities:isCapital'),
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: translateLabel('collections:localities:name'),
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: translateLabel('collections:localities:name'),
            },
            {
              name: 'name_alt',
              type: 'text',
              required: true,
              label: translateLabel('collections:localities:name_alt'),
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              label: translateLabel('collections:localities:label'),
            },
            {
              name: 'zip',
              type: 'number',
              label: translateLabel('collections:localities:zip'),
            },
            {
              name: 'type',
              type: 'text',
              required: true,
              label: translateLabel('collections:localities:type'),
            },
            {
              name: 'typeShort',
              type: 'text',
              required: true,
              label: translateLabel('collections:localities:typeShort'),
            },
            {
              name: 'isDualName',
              type: 'checkbox',
              label: translateLabel('collections:localities:isDualName'),
            },
          ],
        },
        {
          label: translateLabel('namecase:label'),
          fields: [namecase],
        },
      ],
    },
    coords,
    timezone,
  ],
}

export default Localities
