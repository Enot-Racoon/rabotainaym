'use client'
import React from 'react'

export const Error: React.FC = ({ className }: WithClassName) => {
  return (
    <svg
      className={['text-destructive', className].filter(Boolean).join(' ')}
      fill="none"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="lighten">
          <feColorMatrix
            type="matrix"
            values="
             1 0 0 0 0.8
             0 1 0 0 0.8
             0 0 1 0 0.8
             0 0 0 1 0"
          />
        </filter>
      </defs>
      <circle cx={13} cy={13} r={8} fill="currentColor" />
      <path
        stroke="currentColor"
        filter="url(#lighten)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.4001 10.5996L10.6001 15.3996M10.6001 10.5996L15.4001 15.3996"
      />
    </svg>
  )
}
