// tsc -w index.ts allows the terminal to display any errors and provide realtime errors
// so we do not have to tsc index.ts all the time.

interface Chicken {
  breed: string,
  eggsPerWeek: Number,
  name: string,
  age: number
}

const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "Norma",
  age: 2
}