'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

import { cn } from '@/utilities/ui'

import { Message } from './Message'

const RenderParams: React.FC<{
  className?: string
  params?: string[]
}> = ({ className, params = ['error', 'message', 'success', 'warning'] }) => {
  const searchParams = useSearchParams()
  const paramObject: object = Object.fromEntries(
    params.map((param) => [param, searchParams.get(param)]).filter(([, value]) => !!value),
  )

  if (Object.keys(paramObject).length) {
    return (
      <div className={cn('container my-4', className)}>
        {Object.entries(paramObject).map(([key, value]) => (
          <Message key={key} {...{ [key]: value }} />
        ))}
      </div>
    )
  }

  return null
}

export default RenderParams
