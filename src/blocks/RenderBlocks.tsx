import React from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

const blockComponents = {
  content: ContentBlock,
  mediaBlock: MediaBlock,
  formBlock: FormBlock,
  archive: ArchiveBlock,
  cta: CallToActionBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = ({ blocks }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!blocks?.length) return null

  return blocks.map((block, index) => {
    if (block.blockType && block.blockType in blockComponents) {
      const Block = blockComponents[block.blockType]

      if (!Block) return null

      /* @ts-expect-error there may be some mismatch between the expected types here */
      return <Block key={index} {...block} disableInnerContainer />
    }
  })
}
