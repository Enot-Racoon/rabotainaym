import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import namecase from '@/fields/namecase'
import { admins } from '@/collections/access/admins'
import { anyone } from '@/collections/access/anyone'

const Regions: CollectionConfig = {
  slug: 'regions',
  access: {
    read: anyone,
    create: admins,
    update: admins,
    delete: admins,
  },
  defaultSort: 'name',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'region', 'capital', 'code', 'localities'],
  },
  labels: {
    plural: translateLabel('collections:regions:labels:plural'),
    singular: translateLabel('collections:regions:labels:singular'),
  },
  fields: [
    {
      name: 'capital',
      label: translateLabel('collections:regions:capital'),
      type: 'relationship',
      relationTo: 'localities',
      required: true,
      filterOptions: () => ({ isCapital: { equals: true } }),
    },
    {
      name: 'district',
      label: translateLabel('collections:regions:district'),
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: translateLabel('collections:regions:type'),
      type: 'text',
      required: true,
    },
    {
      name: 'typeShort',
      label: translateLabel('collections:regions:typeShort'),
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      label: translateLabel('collections:regions:code'),
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: translateLabel('collections:regions:name'),
          fields: [
            {
              name: 'name',
              label: translateLabel('collections:regions:name'),
              type: 'text',
              required: true,
            },
            {
              name: 'fullname',
              label: translateLabel('collections:regions:fullname'),
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              label: translateLabel('collections:regions:label'),
              type: 'text',
              unique: true,
              required: true,
            },
            {
              name: 'name_en',
              label: translateLabel('collections:regions:name_en'),
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: translateLabel('namecase:label'),
          fields: [namecase],
        },
      ],
    },
    {
      name: 'localities',
      type: 'join',
      label: translateLabel('collections:localities:labels:plural'),
      collection: 'localities',
      defaultLimit: 0,
      on: 'region',
      defaultSort: 'name',
    },
  ],
}

export default Regions
