'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const MenuButton = () => {
  return (
    <label
      htmlFor="drawer-toggle"
      className="flex flex-col justify-between size-[3em] px-[0.5em] py-[0.75em] cursor-pointer md:hidden z-30 *:block *:h-[0.125em] *:rounded *:duration-300"
    >
      <span className="bg-foreground transition-transform group-has-[.peer:checked]:translate-y-[calc(0.75em-0.0625em)] group-has-[.peer:checked]:rotate-45"></span>
      <span className="bg-foreground transition-opacity group-has-[.peer:checked]:opacity-0"></span>
      <span className="bg-foreground transition-transform group-has-[.peer:checked]:-translate-y-[calc(0.75em-0.0625em)] group-has-[.peer:checked]:-rotate-45"></span>
    </label>
  )
}

interface DrawerProps {
  children?: ReactNode | ReactNode[]
}

const Drawer = ({ children, className }: WithClassName<DrawerProps>) => {
  const refToggle = useRef<HTMLInputElement>(null)
  const path = usePathname()

  useEffect(() => {
    if (!refToggle.current) return

    refToggle.current.checked = false
  }, [path])

  return (
    <div
      className={['group md:flex md:items-center md:gap-3', className].filter(Boolean).join(' ')}
    >
      <input ref={refToggle} type="checkbox" id="drawer-toggle" className="hidden peer" />

      <MenuButton />

      <div className="fixed top-0 left-0 sm:shadow-none sm:h-full h-[calc(100vh+calc(100lvh-100svh))] mb-[calc(100lvh-100svh)] w-64 bg-card p-6 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 z-20 md:static md:translate-x-0 md:flex md:flex-row md:gap-3 sm:bg-transparent md:p-0 shadow-2xl">
        {children}
      </div>

      <label
        htmlFor="drawer-toggle"
        className="fixed inset-0 h-[calc(100vh+calc(100lvh-100svh))] bg-black/50 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300 z-10 md:hidden"
      ></label>
    </div>
  )
}

export default Drawer
