export function insertQuery(table: string, data: object): string {
  const keys = Object.keys(data)
  const values = Object.values(data)
    .map((v) => (v === null ? 'NULL' : typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v))
    .join(', ')

  const columns = keys.map((k) => `"${k}"`).join(', ')
  return `INSERT INTO "${table}" (${columns})
          VALUES (${values});`
}

export function progressBar(current: number, total = 100, barLength = 40) {
  const progress = Math.round((current / total) * 100)
  const filledLength = Math.round((progress / 100) * barLength)
  const bar = '█'.repeat(filledLength) + '-'.repeat(barLength - filledLength)
  process.stdout.clearLine(0)
  process.stdout.cursorTo(0)
  process.stdout.write(`[${bar}] ${progress}%`)
}
