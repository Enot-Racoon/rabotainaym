'use client'

import { cn } from '@/utilities/ui'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        lg: 'text-xl',
        base: 'text-md',
        default: 'text-md',
        sm: 'text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

const Label: React.FC<
  { ref?: React.Ref<HTMLLabelElement> } & React.ComponentProps<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
> = ({ className, size, ref, ...props }) => (
  <LabelPrimitive.Root className={cn(labelVariants({ size }), className)} ref={ref} {...props} />
)

export { Label }
