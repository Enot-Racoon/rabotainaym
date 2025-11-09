import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'

export const config = {
  variants: {
    variant: {
      default: 'bg-primary text-primary border-primary',
      primary: 'bg-primary text-primary border-primary',
      secondary: 'bg-secondary text-secondary border-secondary',
      success: 'bg-success text-success border-success',
      warning: 'bg-warning text-warning border-warning',
      danger: 'bg-destructive text-destructive border-destructive',
    },
    appearance: {
      default: '!text-white',
      solid: '!text-white',
      outlined: 'border !bg-transparent',
      dashed: 'border border-dashed !bg-transparent',
      text: 'shadow-none !bg-transparent !text-foreground',
      link: 'underline-offset-4 hover:underline !bg-transparent !text-primary',
    },
    size: {
      xl: 'h-14 px-10 py-2 text-xl border-2',
      lg: 'h-11 px-8 py-2 text-lg',
      base: 'h-10 px-4 py-2 text-lg',
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-2 py-1',
      xs: 'h-6 px-2 py-1',
      icon: 'h-10 w-10',
      clear: '',
    },
    shape: {
      default: '',
      round: 'rounded-full',
      circle: 'rounded-full p-0 aspect-square',
    },
    loading: {
      true: 'cursor-wait opacity-80',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'base',
    shape: 'default',
    appearance: 'solid',
  },
} as const

const buttonVariants = cva(
  'hoverable inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  config,
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      appearance,
      size,
      shape,
      loading,
      disabled,
      children,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, appearance, size, shape, loading, className }))}
        ref={ref}
        disabled={(disabled || loading) ?? false}
        {...props}
      >
        <>
          {loading && (
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          )}
          {children}
        </>
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
