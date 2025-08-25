import type { CollectionAfterChangeHook } from 'payload'
import type { User } from '@/payload-types'

export const loginAfterCreate: CollectionAfterChangeHook<User> = async ({
  doc,
  operation,
  req,
  req: { body, payload },
}) => {
  if (operation === 'create') {
    const { email, password } = { ...body } as Pick<User, 'email' | 'password'>

    if (email && password) {
      const { token, user } = await payload.login({
        collection: 'users',
        data: { email, password },
        req,
      })

      return {
        ...doc,
        token,
        user,
      }
    }
  }

  return doc
}
