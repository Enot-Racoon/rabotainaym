import { PayloadSDK } from '@payloadcms/sdk'
import type { Config } from '@/payload-types'

const api = new PayloadSDK<Config>({
  baseURL: '/api',
  baseInit: { credentials: 'include' },
})

export default api
