import { createElement } from 'react'

const Dump = <T extends object>({ className, ...props }: T & { className?: string }) => {
  try {
    return createElement(
      'div',
      {
        style: { whiteSpace: 'pre-wrap', textAlign: 'left' },
        className: ['dump', className].filter(Boolean).join(' '),
      },
      JSON.stringify(props, null, 2),
    )
  } catch (err) {
    console.warn('Dump props error:', err)
  }
}

Dump.displayName = 'Dump'

export default Dump
