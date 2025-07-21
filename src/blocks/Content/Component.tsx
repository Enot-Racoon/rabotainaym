import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'
import { StyledContent } from '@/blocks/Content/Styled'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    center: '12',
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  if (!columns?.length) return null

  return (
    <div className="container">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns.map(({ className, enableHtmlAttributes, htmlStyle, richText, size }, index) => (
          <StyledContent
            key={index}
            style={enableHtmlAttributes ? htmlStyle : null}
            className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
              'md:col-span-2': size !== 'full',
              'grid justify-center': size === 'center',
              [`${className}`]: enableHtmlAttributes && className,
            })}
          >
            {richText && <RichText data={richText} enableGutter={false} />}
          </StyledContent>
        ))}
      </div>
    </div>
  )
}
