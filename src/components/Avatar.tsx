'use client'

import md5 from 'md5'
import React from 'react'
import { useAuth } from '@payloadcms/ui'

export default function Avatar({ size = 48 }: { size: number | string }) {
  const { user } = useAuth()

  const hash = md5(user?.email?.trim().toLowerCase() ?? '')

  const params = new URLSearchParams({
    default: 'mp',
    r: 'g',
    s: '50',
  }).toString()

  // const query = `?${params}`

  return (
    <img
      width={size}
      height={size}
      alt={user?.email}
      title={user?.email}
      className="gravatar-account"
      style={{ borderRadius: '50%' }}
      src={`https://www.gravatar.com/avatar/${hash}?${params}`}
    />
  )
}
