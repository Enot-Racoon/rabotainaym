import type { CollectionConfig } from 'payload'

import { translateLabel } from '@/i18n'
import { role } from '@/collections/access/role'
import { admins } from '@/collections/access/admins'
import { anyone } from '@/collections/access/anyone'
import { protectRole } from '@/collections/hooks/protectRole'
import { adminsAndUser } from '@/collections/access/adminsAndUser'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 60 * 60 * 8,
    cookies: { secure: true },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['email', 'phone', 'name', 'surname', 'role'],
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    unlock: admins,
    admin: role('admin'),
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
      label: translateLabel('collections:localities:labels:singular'),
      name: 'locality',
      required: true,
      type: 'relationship',
      relationTo: 'localities',
    },
    {
      label: translateLabel('general:referrer'),
      name: 'referrer',
      type: 'text',
    },
    {
      label: translateLabel('collections:users:role:singular'),
      name: 'role',
      type: 'select',
      required: true,
      saveToJWT: true,
      access: {
        read: adminsAndUser,
        update: admins,
        // create: admins, // todo: check security
      },
      hooks: {
        beforeChange: [protectRole],
      },
      options: [
        { label: translateLabel('collections:users:role:admin'), value: 'admin' },
        { label: translateLabel('collections:users:role:self-employed'), value: 'self-employed' },
        { label: translateLabel('collections:users:role:legal-entity'), value: 'legal-entity' },
      ],
    },
    {
      name: 'avatar',
      label: translateLabel('collections:users:avatar'),
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'balance',
      type: 'number',
      label: translateLabel('collections:users:balance'),
      required: true,
      defaultValue: 0,
    },
    {
      name: 'announcements',
      type: 'join',
      label: translateLabel('collections:announcements:labels:plural'),
      collection: 'announcements',
      on: 'author',
      defaultLimit: 0,
    },
  ],
  timestamps: true,
}
