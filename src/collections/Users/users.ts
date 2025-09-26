import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import { roles } from '@/collections/access/roles'
import { admins } from '@/collections/access/admins'
import { anyone } from '@/collections/access/anyone'
import { protectRoles } from '@/collections/hooks/protectRoles'
import { adminsAndUser } from '@/collections/access/adminsAndUser'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 60 * 60 * 8,
    cookies: { secure: true },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['email', 'phone', 'name', 'surname'],
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    unlock: admins,
    admin: roles('admin'),
  },
  hooks: {
    // afterChange: [loginAfterCreate], // todo: to fix
  },
  labels: {
    plural: translateLabel('collections:users:labels:plural'),
    singular: translateLabel('collections:users:labels:singular'),
  },
  fields: [
    {
      label: translateLabel('general:surname'),
      required: true,
      name: 'surname',
      type: 'text',
    },
    {
      label: translateLabel('general:name'),
      required: true,
      name: 'name',
      type: 'text',
    },
    {
      label: translateLabel('general:patronymic'),
      required: true,
      name: 'patronymic',
      type: 'text',
    },
    {
      label: translateLabel('general:company'),
      required: true,
      name: 'company',
      type: 'text',
      defaultValue: '',
    },
    {
      label: translateLabel('general:phone'),
      required: true,
      name: 'phone',
      type: 'text',
    },
    {
      label: translateLabel('collections:regions:labels:singular'),
      name: 'region',
      required: true,
      type: 'relationship',
      relationTo: 'regions',
    },
    {
      label: translateLabel('general:referrer'),
      name: 'referrer',
      type: 'text',
    },
    {
      label: translateLabel('collections:users:roles:singular'),
      name: 'roles',
      type: 'select',
      hasMany: true,
      required: true,
      saveToJWT: true,
      access: {
        read: adminsAndUser,
        update: admins,
        // create: admins, // todo: check security
      },
      hooks: {
        beforeChange: [protectRoles],
      },
      options: [
        { label: translateLabel('collections:users:roles:admin'), value: 'admin' },
        { label: translateLabel('collections:users:roles:self-employed'), value: 'self-employed' },
        { label: translateLabel('collections:users:roles:legal-entity'), value: 'legal-entity' },
      ],
    },
  ],
  timestamps: true,
}
