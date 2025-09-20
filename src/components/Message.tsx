import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'

const messageVariants = cva('w-full p-4 leading-tight rounded-md', {
  variants: {
    variant: {
      default: 'text-foreground',
      warning: 'bg-warning text-background',
      error: 'bg-destructive/90 text-background',
      success: 'bg-success text-background',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: React.ReactNode
  success?: React.ReactNode
  warning?: React.ReactNode
  message?: React.ReactNode
}

export const Message: React.FC<MessageProps> = ({
  className,
  error,
  success,
  warning,
  message,
  ...props
}) => {
  const messageToRender = message || error || success || warning

  let resolvedVariant: VariantProps<typeof messageVariants>['variant'] = 'default'
  if (error) resolvedVariant = 'error'
  else if (success) resolvedVariant = 'success'
  else if (warning) resolvedVariant = 'warning'

  if (!messageToRender) return null

  return (
    <div className={cn(messageVariants({ variant: resolvedVariant }), className)} {...props}>
      {messageToRender}
    </div>
  )
}
