import type { CollectionConfig } from 'payload'
import { translateLabel } from '@/i18n'
import { anyone } from '@/collections/access/anyone'
import { admins } from '@/collections/access/admins'

export const Regions: CollectionConfig = {
  labels: {
    plural: translateLabel('collections:regions:labels:plural'),
    singular: translateLabel('collections:regions:labels:singular'),
  },
  slug: 'regions',
  access: {
    create: admins,
    delete: admins,
    read: anyone,
    update: admins,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      label: translateLabel('general:name'),
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      label: translateLabel('general:country'),
      name: 'country',
      type: 'text',
      hidden: true,
      required: true,
      defaultValue: 'RU',
    },
    {
      label: translateLabel('general:latitude'),
      name: 'latitude',
      type: 'number',
      required: true,
    },
    {
      label: translateLabel('general:longitude'),
      name: 'longitude',
      type: 'number',
      required: true,
    },
    {
      label: translateLabel('general:where'),
      name: 'where',
      type: 'text',
      required: true,
    },
  ],
}
