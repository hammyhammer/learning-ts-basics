function add(x: number, y: number) {
  return x + y
}

function sample<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index]
}