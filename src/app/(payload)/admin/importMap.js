import {
  LexicalDiffComponent as LexicalDiffComponent_44fe37237e0ebf4470c9990d8cb7b07e,
  RscEntryLexicalCell as RscEntryLexicalCell_44fe37237e0ebf4470c9990d8cb7b07e,
  RscEntryLexicalField as RscEntryLexicalField_44fe37237e0ebf4470c9990d8cb7b07e,
} from '@payloadcms/richtext-lexical/rsc'
import {
  AlignFeatureClient as AlignFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  BlockquoteFeatureClient as BlockquoteFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  BlocksFeatureClient as BlocksFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  BoldFeatureClient as BoldFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  ChecklistFeatureClient as ChecklistFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  FixedToolbarFeatureClient as FixedToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  HeadingFeatureClient as HeadingFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  HorizontalRuleFeatureClient as HorizontalRuleFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  IndentFeatureClient as IndentFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  InlineToolbarFeatureClient as InlineToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  ItalicFeatureClient as ItalicFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  LinkFeatureClient as LinkFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  OrderedListFeatureClient as OrderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  ParagraphFeatureClient as ParagraphFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  UnderlineFeatureClient as UnderlineFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  UnorderedListFeatureClient as UnorderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  UploadFeatureClient as UploadFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
} from '@payloadcms/richtext-lexical/client'
import {
  MetaDescriptionComponent as MetaDescriptionComponent_a8a977ebc872c5d5ea7ee689724c0860,
  MetaImageComponent as MetaImageComponent_a8a977ebc872c5d5ea7ee689724c0860,
  MetaTitleComponent as MetaTitleComponent_a8a977ebc872c5d5ea7ee689724c0860,
  OverviewComponent as OverviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
  PreviewComponent as PreviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
} from '@payloadcms/plugin-seo/client'
import { SlugComponent as SlugComponent_92cc057d0a2abb4f6cf0307edf59f986 } from '@/fields/slug/SlugComponent'
import {
  LinkToDoc as LinkToDoc_aead06e4cbf6b2620c5c51c9ab283634,
  ReindexButton as ReindexButton_aead06e4cbf6b2620c5c51c9ab283634,
} from '@payloadcms/plugin-search/client'
import { RowLabel as RowLabel_70cd828b89c9e7b90f91b3790e063c0e } from '@/entities/header/RowLabel'
import { RowLabel as RowLabel_ef845859b401f94369c134c5ecb6ec03 } from '@/entities/footer/RowLabel'
import { default as default_1a7510af427896d367a49dbf838d2de6 } from '@/components/BeforeDashboard'
import { default as default_8a7ab0eb7ab5c511aba12e68480bfe5e } from '@/components/BeforeLogin'

export const importMap = {
  '@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell':
    RscEntryLexicalCell_44fe37237e0ebf4470c9990d8cb7b07e,
  '@payloadcms/richtext-lexical/rsc#RscEntryLexicalField':
    RscEntryLexicalField_44fe37237e0ebf4470c9990d8cb7b07e,
  '@payloadcms/richtext-lexical/rsc#LexicalDiffComponent':
    LexicalDiffComponent_44fe37237e0ebf4470c9990d8cb7b07e,
  '@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient':
    InlineToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#FixedToolbarFeatureClient':
    FixedToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#HeadingFeatureClient':
    HeadingFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#AlignFeatureClient':
    AlignFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#BlockquoteFeatureClient':
    BlockquoteFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#BoldFeatureClient':
    BoldFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#ChecklistFeatureClient':
    ChecklistFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#IndentFeatureClient':
    IndentFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#ItalicFeatureClient':
    ItalicFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#LinkFeatureClient':
    LinkFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#OrderedListFeatureClient':
    OrderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#ParagraphFeatureClient':
    ParagraphFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#UnderlineFeatureClient':
    UnderlineFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#UnorderedListFeatureClient':
    UnorderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#UploadFeatureClient':
    UploadFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/plugin-seo/client#OverviewComponent':
    OverviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
  '@payloadcms/plugin-seo/client#MetaTitleComponent':
    MetaTitleComponent_a8a977ebc872c5d5ea7ee689724c0860,
  '@payloadcms/plugin-seo/client#MetaImageComponent':
    MetaImageComponent_a8a977ebc872c5d5ea7ee689724c0860,
  '@payloadcms/plugin-seo/client#MetaDescriptionComponent':
    MetaDescriptionComponent_a8a977ebc872c5d5ea7ee689724c0860,
  '@payloadcms/plugin-seo/client#PreviewComponent':
    PreviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
  '@/fields/slug/SlugComponent#SlugComponent': SlugComponent_92cc057d0a2abb4f6cf0307edf59f986,
  '@payloadcms/richtext-lexical/client#HorizontalRuleFeatureClient':
    HorizontalRuleFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/richtext-lexical/client#BlocksFeatureClient':
    BlocksFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  '@payloadcms/plugin-search/client#LinkToDoc': LinkToDoc_aead06e4cbf6b2620c5c51c9ab283634,
  '@payloadcms/plugin-search/client#ReindexButton': ReindexButton_aead06e4cbf6b2620c5c51c9ab283634,
  '@/entities/header/RowLabel#RowLabel': RowLabel_70cd828b89c9e7b90f91b3790e063c0e,
  '@/entities/footer/RowLabel#RowLabel': RowLabel_ef845859b401f94369c134c5ecb6ec03,
  '@/components/BeforeDashboard#default': default_1a7510af427896d367a49dbf838d2de6,
  '@/components/BeforeLogin#default': default_8a7ab0eb7ab5c511aba12e68480bfe5e,
}
