import { JSX } from 'react'

const PageHeader = (props: JSX.IntrinsicElements['h1']) => {
  return (
    <h1
      {...props}
      className={[
        'font-medium text-3xl tracking-wider text-center whitespace-pre-wrap mb-14',
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {props.children}
    </h1>
  )
}

export default PageHeader
