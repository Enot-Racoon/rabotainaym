import * as React from 'react'

import { cn } from '@/utilities/ui'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-14 w-full rounded-md bg-background px-3 py-2 text-lg file:border-0 file:bg-transparent file:text-md file:font-medium file:text-foreground placeholder:text-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-2xl',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
