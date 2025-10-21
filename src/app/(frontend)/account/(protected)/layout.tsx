import type { PropsWithChildren } from 'react'
import checkLoginToAccess from '@/components/Account/checkLoginToAccess'

export default async function ProtectedAccountLayout({ children }: PropsWithChildren) {
  await checkLoginToAccess()

  return children
}
