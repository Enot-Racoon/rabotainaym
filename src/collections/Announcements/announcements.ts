import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import workTime from '@/fields/workTime'
import { anyone } from '@/collections/access/anyone'
import { admins } from '@/collections/access/admins'
import { authenticated } from '@/collections/access/authenticated'
import { accessAdminAndAuthor } from '@/collections/access/accessAdminAndAuthor'

import type { Announcement } from '@/payload-types'

const Announcements: CollectionConfig = {
  slug: 'announcements',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {
    read: anyone,
    create: authenticated,
    update: accessAdminAndAuthor,
    delete: accessAdminAndAuthor,
    admin: admins,
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
          label: translateLabel('collections:announcements:main-info'),
          fields: [
            {
              name: 'author',
              required: true,
              type: 'relationship',
              label: translateLabel('collections:announcements:author'),
              relationTo: 'users',
            },
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
            {
              name: 'status',
              label: translateLabel('collections:announcements:status:label'),
              required: true,
              type: 'select',
              defaultValue: 'unpublished',
              options: [
                {
                  value: 'blocked',
                  label: translateLabel('collections:announcements:status:blocked'),
                },
                {
                  value: 'stopped',
                  label: translateLabel('collections:announcements:status:stopped'),
                },
                {
                  value: 'published',
                  label: translateLabel('collections:announcements:status:published'),
                },
                {
                  value: 'unpublished',
                  label: translateLabel('collections:announcements:status:unpublished'),
                },
              ],
            },
          ],
        },
        {
          label: translateLabel('collections:announcements:images'),
          fields: [
            {
              label: '',
              name: 'images',
              type: 'upload',
              hasMany: true,
              relationTo: 'media',
              filterOptions: { mimeType: { contains: 'image' } },
            },
          ],
        },
        {
          label: translateLabel('collections:announcements:work-time'),
          name: 'workTime',
          fields: [workTime],
        },
      ],
    },
  ],
}

export default Announcements
