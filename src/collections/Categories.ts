import type { CollectionConfig } from 'payload'

import { anyone } from '@/collections/access/anyone'
import { authenticated } from '@/collections/access/authenticated'
import { slugField } from '@/fields/slug'
import { translateLabel } from '@/i18n'

export const Categories: CollectionConfig = {
  labels: {
    plural: translateLabel('collections:categories:labels:plural'),
    singular: translateLabel('collections:categories:labels:singular'),
  },
  slug: 'categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}
