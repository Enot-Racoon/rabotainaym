import type { PropsWithChildren } from 'react'
import RenderParams from '@/components/RenderParams'

export default async function AccountLayout({ children }: PropsWithChildren) {
  return (
    <>
      <RenderParams />

      {children}
    </>
  )
}
