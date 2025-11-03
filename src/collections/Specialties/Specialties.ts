import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import { anyone } from '@/collections/access/anyone'
import { admins } from '@/collections/access/admins'

const Specialties: CollectionConfig = {
  slug: 'specialties',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category'],
  },
  defaultSort: 'name',
  access: {
    read: anyone,
    create: admins,
    update: admins,
    delete: admins,
  },
  labels: {
    plural: translateLabel('collections:specialties:labels:plural'),
    singular: translateLabel('collections:specialties:labels:singular'),
  },
  fields: [
    {
      name: 'name',
      label: translateLabel('collections:specialties:name'),
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      label: translateLabel('collections:specialties:category'),
      type: 'relationship',
      hasMany: true,
      relationTo: 'specialty-categories',
    },
  ],
}

export default Specialties
