import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const appName = 'Работа и Найм' // todo: extract to i18n

const defaultOpenGraph: Metadata['openGraph'] = {
  type: appName,
  description: appName,
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: appName,
  title: appName,
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
