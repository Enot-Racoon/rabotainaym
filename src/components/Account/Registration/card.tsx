import React, { type PropsWithChildren, type ReactNode } from 'react'

import { cn } from '@/utilities/ui'
import Card from '@/components/ui/card'

const CustomCard = (
  props: PropsWithChildren<Partial<Record<'title' | 'description' | 'footer', ReactNode>>>,
) => {
  return (
    <Card className="rounded-tl-none">
      {(props.title || props.description) && (
        <Card.Header>
          {props.title && <Card.Title>{props.title}</Card.Title>}
          {props.description && <Card.Description>{props.description}</Card.Description>}
        </Card.Header>
      )}
      <Card.Content
        className={cn('grid gap-6 p-12', props.title || props.description ? 'pt-0' : 'pt-8')}
      >
        {props.children}
      </Card.Content>
      {props.footer && <Card.Footer className="justify-center">{props.footer}</Card.Footer>}
    </Card>
  )
}

export default CustomCard
