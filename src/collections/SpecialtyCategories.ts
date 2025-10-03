import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'

const SpecialtyCategories: CollectionConfig = {
  slug: 'specialty-categories',
  admin: {
    // hidden: true,
    useAsTitle: 'name',
    defaultColumns: ['name', 'specialties'],
  },
  defaultSort: 'name',
  labels: {
    plural: translateLabel('collections:specialty-groups:labels:plural'),
    singular: translateLabel('collections:specialty-groups:labels:singular'),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: translateLabel('collections:specialty-groups:name'),
    },
    {
      name: 'specialties',
      type: 'join',
      label: translateLabel('collections:specialty-groups:specialties'),
      collection: 'specialties',
      on: 'category',
    },
  ],
}

export default SpecialtyCategories
