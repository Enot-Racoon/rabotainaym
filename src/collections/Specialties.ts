import type { CollectionConfig } from 'payload'
import { translateLabel } from '@/i18n'

const Specialties: CollectionConfig = {
  slug: 'specialties',
  // todo: complete define collection
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category'],
  },
  access: {},
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
      relationTo: 'specialties',
      admin: { condition: ({ isCategory }) => !isCategory },
      filterOptions: () => ({ isCategory: { equals: true } }),
    },
    {
      name: 'isCategory',
      label: translateLabel('collections:specialties:isCategory'),
      type: 'checkbox',
    },
  ],
}

export default Specialties
