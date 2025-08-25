import type { AccessArgs } from 'payload'

export const authenticatedOrPublished = ({ req: { user } }: AccessArgs) => {
  if (user) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
