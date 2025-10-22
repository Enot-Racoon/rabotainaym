const PageMetaTitle = ({ children }: { children?: string | string[] }) => (
  <title>{Array.isArray(children) ? children.filter(Boolean).join('') : children}</title>
)

export default PageMetaTitle
