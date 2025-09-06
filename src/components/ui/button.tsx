import { ButtonHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import { cn } from '@/utilities/ui'

export const config = {
  variants: {
    variant: {
      solid: '!text-white',
      outlined: 'border !bg-transparent',
      dashed: 'border border-dashed !bg-transparent',
      text: 'shadow-none !bg-transparent !text-foreground',
      link: 'underline-offset-4 hover:underline !bg-transparent !text-primary',
    },
    color: {
      primary: 'bg-primary text-primary border-primary',
      secondary: 'bg-secondary text-secondary border-secondary',
      success: 'bg-success text-success border-success',
      warning: 'bg-warning text-warning border-warning',
      danger: 'bg-destructive text-destructive border-destructive',
      default: 'bg-secondary text-secondary border-secondary',
    },
    size: {
      large: 'h-12 px-6 text-base',
      middle: 'h-10 px-4 text-sm',
      small: 'h-8 px-3 text-xs',
    },
    shape: {
      default: 'rounded-md',
      circle: 'rounded-full p-0 aspect-square',
      round: 'rounded-full',
    },
    loading: {
      true: 'cursor-wait opacity-80',
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'middle',
    shape: 'default',
  },
} as const

const buttonVariants = cva(
  'hoverable inline-flex items-center justify-center font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  config,
)

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export const Button = ({
  className,
  variant,
  color,
  size,
  shape,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      buttonVariants({
        variant,
        color: color as never,
        size,
        shape,
        loading,
        className,
      }),
    )}
    disabled={disabled || loading}
    {...props}
  >
    {loading && (
      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
    )}
    {children}
  </button>
)
