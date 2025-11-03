import { useCallback, useEffect, useState } from 'react'

type AsyncState<T> = {
  loading: boolean
  error: Error | null
  data: T | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAsync = <T, Args extends any[] = []>(
  asyncFunction: (...args: Args) => Promise<T>,
  immediate?: Args,
) => {
  const [state, setState] = useState<AsyncState<T>>({
    loading: false,
    error: null,
    data: null,
  })

  const execute = useCallback(
    async (...args: Args) => {
      setState({ loading: true, error: null, data: null })
      try {
        const response = await asyncFunction(...args)
        setState({ loading: false, error: null, data: response })
        return response
      } catch (error) {
        setState({
          loading: false,
          error: error instanceof Error ? error : new Error(String(error)),
          data: null,
        })
        throw error
      }
    },
    [asyncFunction],
  )

  const reset = useCallback(() => {
    setState({ loading: false, error: null, data: null })
  }, [])

  useEffect(() => {
    if (immediate) void execute(...immediate)
  }, [execute, immediate])

  return { ...state, execute, reset }
}

export default useAsync
