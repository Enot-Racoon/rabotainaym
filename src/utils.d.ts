declare global {
  type WithClassName<T = object> = T & { className?: string }
}

export {}
