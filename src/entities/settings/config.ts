import type { GlobalConfig } from 'payload'

import { revalidateSettings } from './hooks/revalidateSettings'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: { read: () => true },
  fields: [],
  hooks: { afterChange: [revalidateSettings] },
}
