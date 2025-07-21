import type { TextFieldSingleValidation } from 'payload'
import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  ChecklistFeature,
  IndentFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  type LinkFields,
  OrderedListFeature,
  ParagraphFeature,
  UnderlineFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'

const linkFeatureConfig: Parameters<typeof LinkFeature>[0] = {
  enabledCollections: ['pages', 'posts'],
  fields: ({ defaultFields }) => {
    const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
      return !('name' in field && field.name === 'url')
    })

    return [
      ...defaultFieldsWithoutUrl,
      {
        name: 'url',
        type: 'text',
        admin: {
          condition: (_data, siblingData) => siblingData?.linkType !== 'internal',
        },
        label: ({ t }) => t('fields:enterURL'),
        required: true,
        validate: ((value, options) => {
          if ((options?.siblingData as LinkFields)?.linkType === 'internal') {
            return true // no validation needed, as no url should exist for internal links
          }
          return value ? true : 'URL is required'
        }) as TextFieldSingleValidation,
      },
    ]
  },
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const blocksFeatureConfig: Parameters<typeof BlocksFeature>[0] = {
  blocks: [
    {
      slug: 'callout',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  inlineBlocks: [
    {
      slug: 'mention',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export const defaultLexical = lexicalEditor({
  features: [
    AlignFeature(),
    // BlocksFeature(blocksFeatureConfig),
    BlockquoteFeature(),
    BoldFeature(),
    ChecklistFeature(),
    IndentFeature(),
    InlineToolbarFeature(),
    ItalicFeature(),
    LinkFeature(linkFeatureConfig),
    OrderedListFeature(),
    ParagraphFeature(),
    UnderlineFeature(),
    UnorderedListFeature(),
    UploadFeature(),
  ],
})
