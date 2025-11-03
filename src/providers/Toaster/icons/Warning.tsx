'use client'
import React from 'react'

export const Warning: React.FC = ({ className }: WithClassName) => {
  return (
    <svg
      className={['text-warning', className].filter(Boolean).join(' ')}
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
        filter="url(#lighten)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V13.2M13 16.4H13.008"
      />
    </svg>
  )
}
