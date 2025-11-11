import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'

import type { Payload } from 'payload'
import type { Media } from '@/payload-types'

export function insertQuery(table: string, data: object): string {
  const keys = Object.keys(data)
  const values = Object.values(data)
    .map((v) => (v === null ? 'NULL' : typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v))
    .join(', ')

  const columns = keys.map((k) => `"${k}"`).join(', ')
  return `INSERT INTO "${table}" (${columns})
          VALUES (${values});`
}

export function progressBar(index: number, total = 100, barLength = 40) {
  const current = index + 1
  const pct = Math.round((current / total) * 100)
  const filledLength = Math.round((pct / 100) * barLength)
  const bar = '█'.repeat(filledLength) + '-'.repeat(barLength - filledLength)
  const text = `[${bar}] ${pct}% (${current}/${total}) `

  if (!process.stdout.isTTY) {
    console.log(text)
  } else {
    readline.clearLine(process.stdout, 0)
    readline.cursorTo(process.stdout, 0)
    process.stdout.write(text)
  }
}

export const seedImages = async (payload: Payload, images: Record<'path' | 'alt', string>[]) => {
  const filename = fileURLToPath(import.meta.url)
  const dirname = path.dirname(filename)
  const createImageData = (alt: string): Omit<Media, 'createdAt' | 'id' | 'updatedAt'> => ({
    alt,
  })

  return Promise.all(
    images.map(async (image) => {
      return await payload.create({
        collection: 'media',
        data: createImageData(image.alt),
        filePath: path.resolve(dirname, '..', image.path),
      })
    }),
  )
}
