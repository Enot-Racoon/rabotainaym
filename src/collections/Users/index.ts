import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import { authenticated } from '@/collections/access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    plural: translateLabel('collections:users:labels:plural'),
    singular: translateLabel('collections:users:labels:singular'),
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      label: translateLabel('general:name'),
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
