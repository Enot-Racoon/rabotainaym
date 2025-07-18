export const LoginView = (props: object) => {
  const getProps = () => {
    try {
      return JSON.stringify(props, null, 2)
    } catch (e) {
      //
    }
  }
  return (
    <>
      <h1>LoginView</h1>
      <div style={{ whiteSpace: 'pre-wrap' }} children={getProps()} />
    </>
  )
}
