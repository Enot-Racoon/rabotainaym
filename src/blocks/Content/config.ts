import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const columnFields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        label: 'Размер',
        name: 'size',
        type: 'select',
        defaultValue: 'center',
        options: [
          {
            label: 'В центре',
            value: 'center',
          },
          {
            label: 'Треть',
            value: 'oneThird',
          },
          {
            label: 'Половина',
            value: 'half',
          },
          {
            label: 'Две трети',
            value: 'twoThirds',
          },
          {
            label: 'Вся ширина',
            value: 'full',
          },
        ],
      },
      {
        type: 'row',
        fields: [
          {
            label: 'HTML аттрибуты',
            name: 'enableHtmlAttributes',
            type: 'checkbox',
            admin: {
              style: {
                transform: 'translateY(50%)',
              },
            },
          },
        ],
        admin: {
          style: {
            padding: '0 12px',
            marginTop: '25px',
            justifyContent: 'end',
            borderRadius: 'var(--style-radius-s)',
            backgroundColor: 'var(--theme-input-bg)',
          },
        },
      },
    ],
  },
  {
    label: 'HTML аттрибуты',
    type: 'collapsible',
    fields: [
      {
        label: 'HTML класс',
        name: 'className',
        type: 'text',
      },
      {
        label: 'HTML стиль',
        name: 'htmlStyle',
        type: 'text',
      },
    ],
    admin: {
      initCollapsed: true,
      condition: (_, data) => Boolean(data?.enableHtmlAttributes),
    },
  },
  {
    name: 'richText',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ]
      },
    }),
    label: false,
  },
  /*   {
      label: 'Включить ссылки',
      name: 'enableLink',
      type: 'checkbox',
    },
    link({
      overrides: {
        admin: {
          condition: (_data, siblingData) => {
            return Boolean(siblingData?.enableLink)
          },
        },
      },
    }), */
]

export const Content: Block = {
  labels: {
    plural: 'Контент',
    singular: 'Контент',
  },
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      labels: {
        plural: 'блоки',
        singular: 'блок',
      },
      label: 'Блоки',
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
}
