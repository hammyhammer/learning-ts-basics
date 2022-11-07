// putting in export of wait, it is considered a module. TS will yell at us
// if we do. 

export function add(x: number, y: number) {
  return x + y
}

export function sample<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index]
}

export const pi = 3.14