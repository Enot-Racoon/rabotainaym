function pick<T extends object, K extends keyof T>(object: T, keys: K[]): Pick<T, K>
function pick<T extends object, K extends keyof T>(object: T, ...keys: K[]): Pick<T, K>
function pick<T extends object, K extends keyof T>(
  object: T,
  ...keysOrArray: (K | K[])[]
): Pick<T, K> {
  const flatKeys = keysOrArray.flat() as K[]
  const newObject = {} as Pick<T, K>

  for (const key of flatKeys) {
    if (key in object) {
      newObject[key] = object[key]
    }
  }

  return newObject
}

export default pick
