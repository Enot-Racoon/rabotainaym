'use client'

import React from 'react'
import { useAuth } from '@/providers/Auth'

const Account = () => {
  return (
    <pre className="bordered whitespace-pre-wrap">{JSON.stringify(useAuth().user, null, 2)}</pre>
  )
}

export default Account
