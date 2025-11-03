'use client'
import React from 'react'
import { Toaster as BaseToaster } from '@/utilities/toaster'

import { Info } from './icons/Info'
import { Error } from './icons/Error'
import { Success } from './icons/Success'
import { Warning } from './icons/Warning'

import './toasts.scss'

const Toaster: React.FC = () => {
  return (
    <BaseToaster
      gap={8}
      closeButton
      icons={{
        info: <Info />,
        error: <Error />,
        success: <Success />,
        warning: <Warning />,
      }}
      className="payload-toast-container"
      toastOptions={{
        classNames: {
          title: 'toast-title',
          // toast: 'payload-toast-item',
          closeButton: 'payload-toast-close-button',
          // content: 'toast-content',
          // icon: 'toast-icon',
          // info: 'toast-info',
          // error: 'toast-error',
          // success: 'toast-success',
          // warning: 'toast-warning',
        },
        // unstyled: true,
      }}
      visibleToasts={5}
    />
  )
}

export default Toaster
