'use client'

import React, { useEffect, useRef } from 'react'

export interface StyledContentProps extends Omit<React.HTMLProps<HTMLDivElement>, 'style'> {
  style?: string | null
}

export const StyledContent = ({ style, ...props }: StyledContentProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      if (style) {
        ref.current.setAttribute('style', style)
      } else {
        ref.current.removeAttribute('style')
      }
    }
  }, [style])

  return <div {...props} ref={ref} />
}
