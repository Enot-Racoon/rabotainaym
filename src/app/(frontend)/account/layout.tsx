import { JSX } from 'react'
import RenderParams from '@/components/RenderParams'

export default async function AccountLayout({ children }: JSX.IntrinsicElements['div']) {
  return (
    <>
      <RenderParams />

      {children}
    </>
  )
}
