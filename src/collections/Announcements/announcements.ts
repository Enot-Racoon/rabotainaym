import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import { anyone } from '@/collections/access/anyone'
import { adminsAndUser } from '@/collections/access/adminsAndUser'

const Announcements: CollectionConfig = {
  slug: 'announcements',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {
    read: anyone,
    create: adminsAndUser,
    update: adminsAndUser,
    delete: adminsAndUser,
    unlock: adminsAndUser,
    admin: adminsAndUser,
  },
  labels: {
    plural: translateLabel('collections:announcements:labels:plural'),
    singular: translateLabel('collections:announcements:labels:singular'),
  },
  timestamps: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: translateLabel('collections:announcements:title'),
    },
    {
      label: translateLabel('collections:regions:labels:singular'),
      name: 'region',
      required: true,
      type: 'relationship',
      relationTo: 'regions',
    },
    {
      label: translateLabel('collections:localities:labels:singular'),
      name: 'locality',
      required: true,
      type: 'relationship',
      relationTo: 'localities',
    },
    {
      name: 'skills',
      type: 'textarea',
      required: true,
      label: translateLabel('collections:announcements:skills'),
    },
  ],
}

export default Announcements
