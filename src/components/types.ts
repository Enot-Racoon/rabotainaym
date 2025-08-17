import { ComponentType } from 'react'

// eslint-disable-next-line
export type ExtractComponentProps<T extends ComponentType<any>> =
  T extends ComponentType<infer U> ? U : never
