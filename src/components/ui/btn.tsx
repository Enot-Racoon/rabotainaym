import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'

export const config = {
  variants: {
    variant: {
      solid: '',
      outlined: 'border bg-transparent',
      dashed: 'border border-dashed bg-transparent',
      filled: 'bg-opacity-20',
      text: 'bg-transparent shadow-none',
      link: 'bg-transparent underline-offset-4 hover:underline',
    },
    color: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600 border-blue-500',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600 border-gray-500',
      success: 'bg-green-500 text-white hover:bg-green-600 border-green-500',
      warning: 'bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500',
      danger: 'bg-red-500 text-white hover:bg-red-600 border-red-500',
      default: 'bg-gray-200 text-black hover:bg-gray-300 border-gray-300',
    },
    size: {
      large: 'h-11 px-6 text-base',
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
  'inline-flex items-center justify-center font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  config,
)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export const Btn: React.FC<ButtonProps> = ({
  className,
  variant,
  color,
  size,
  shape,
  loading = false,
  disabled,
  children,
  ...props
}) => {
  return (
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
}
