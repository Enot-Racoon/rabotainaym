import type { GlobalProvider } from '@ladle/react'
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import 'src/app/(frontend)/globals.css'

import './styles.scss'

export const Provider: GlobalProvider = ({ children, globalState, storyMeta }) => {
  return (
    <AppRouterContext
      value={{
        back: () => void 0,
        forward: () => void 0,
        prefetch: () => void 0,
        push: () => void 0,
        refresh: () => void 0,
        replace: () => void 0,
      }}
    >
      <div className="grid justify-center items-center">
        <div className="flex gap-4">{children}</div>
      </div>
    </AppRouterContext>
  )
}
