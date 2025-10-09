import type { Region } from '@/payload-types'

const publicFields = ['id', 'name', 'localities'] satisfies (keyof Region)[]

export default publicFields
