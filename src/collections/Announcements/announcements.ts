import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import workTime from '@/fields/workTime'
import { anyone } from '@/collections/access/anyone'
import { admins } from '@/collections/access/admins'
import { adminsAndUser } from '@/collections/access/adminsAndUser'
import { Announcement } from '@/payload-types'

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
    delete: admins,
    admin: adminsAndUser,
  },
  labels: {
    plural: translateLabel('collections:announcements:labels:plural'),
    singular: translateLabel('collections:announcements:labels:singular'),
  },
  timestamps: true,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: translateLabel('general:createNew'), // todo: fix label
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: translateLabel('collections:announcements:title'),
            },
            {
              label: translateLabel('collections:announcements:region'),
              name: 'region',
              required: true,
              type: 'relationship',
              relationTo: 'regions',
            },
            {
              label: translateLabel('collections:announcements:locality'),
              name: 'locality',
              required: true,
              type: 'relationship',
              relationTo: 'localities',
              filterOptions: (options) => {
                const { region = '0' } = options.siblingData as Announcement
                return { region: { equals: region } }
              },
            },
            {
              label: translateLabel('collections:announcements:specialty'),
              name: 'specialty',
              required: true,
              type: 'relationship',
              relationTo: 'specialties',
            },
            {
              name: 'skills',
              type: 'textarea',
              required: true,
              label: translateLabel('collections:announcements:skills'),
            },
          ],
        },
        {
          label: 'Images',
          fields: [
            {
              label: '',
              name: 'images',
              type: 'upload',
              hasMany: true,
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'Work time',
          name: 'workTime',
          fields: [workTime],
        },
      ],
    },
  ],
}

export default Announcements
