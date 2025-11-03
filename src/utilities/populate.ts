export type Populate<T> = Exclude<T, number>

const populate = <T>(value: T): Populate<T> => value as never

export default populate
