export function insertQuery(table: string, data: object): string {
  const keys = Object.keys(data)
  const values = Object.values(data)
    .map((v) => (v === null ? 'NULL' : typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v))
    .join(', ')

  const columns = keys.map((k) => `"${k}"`).join(', ')
  return `INSERT INTO "${table}" (${columns})
          VALUES (${values});`
}
