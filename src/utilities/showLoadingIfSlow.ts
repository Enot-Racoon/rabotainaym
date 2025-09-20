async function showLoadingIfSlow<T>(
  asyncFunc: () => Promise<T>,
  setLoading: (value: boolean) => void,
  delay = 1000,
) {
  const timer = setTimeout(() => setLoading(true), delay)

  try {
    return await asyncFunc()
  } finally {
    clearTimeout(timer)
    setLoading(false)
  }
}

export default showLoadingIfSlow
