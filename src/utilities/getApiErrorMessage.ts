import type { CollectionSlug } from 'payload'

export interface APIErrorMessage {
  message: string
  path: string
}

export interface APIError {
  name: string
  data: {
    collection: CollectionSlug
    errors: APIErrorMessage[]
  }
  message: string
}

export interface ResponseWithErrors {
  errors: APIError[]
}

export default function getApiErrorMessage({ errors }: ResponseWithErrors): string {
  return errors
    .map((error) => error?.data?.errors.map(({ message }) => message).join(', ') || error?.message)
    .join(', ')
}
