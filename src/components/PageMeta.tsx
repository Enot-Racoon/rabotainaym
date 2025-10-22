type PageMetaProps = {
  title?: string | string[]
  description?: string
  ogTitle?: string
}

const PageMeta = ({ title, description, ogTitle }: PageMetaProps) => {
  const fullTitle = Array.isArray(title) ? title.filter(Boolean).join('') : title

  return (
    <>
      {fullTitle && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
    </>
  )
}

export default PageMeta
