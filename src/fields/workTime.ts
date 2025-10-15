import type { CheckboxField, Field, Option } from 'payload'
import { translateLabel } from '@/i18n'

const workTimeOptions: Option[] = [...Array(24).keys()].flatMap((key) => [
  {
    label: `${String(key).padStart(2, '0')}:00`,
    value: `${String(key).padStart(2, '0')}00`,
  },
  {
    label: `${String(key).padStart(2, '0')}:30`,
    value: `${String(key).padStart(2, '0')}30`,
  },
])

const weekDays: CheckboxField[] = (['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const).map(
  (name) => ({
    name,
    type: 'checkbox',
    label: translateLabel(`week-days:${name}`),
  }),
)

const workTime: Field = {
  type: 'row',
  fields: [
    {
      label: '',
      name: 'start',
      type: 'select',
      admin: { width: '0', className: 'min-w-[180px]' },
      options: workTimeOptions,
    },
    {
      label: ' - ',
      type: 'group',
      virtual: true,
      fields: [],
      admin: {
        width: '0',
        components: {
          Field: {
            path: '@/components/ui/label#Label',
            clientProps: {
              children: ' - ',
              className: 'max-h-[40px] items-center justify-center',
            },
          },
        },
      },
    },
    {
      label: '',
      name: 'end',
      type: 'select',
      admin: { width: '0', className: 'min-w-[180px]' },
      options: workTimeOptions,
    },
    {
      label: ' ',
      type: 'group',
      name: 'days',
      admin: {
        width: '0',
        hideGutter: true,
      },
      fields: [
        {
          type: 'row',
          fields: weekDays,
        },
      ],
    },
    {
      label: '',
      type: 'group',
      virtual: true,
      fields: [],
      admin: { width: '100%' },
    },
  ],
}

export default workTime
