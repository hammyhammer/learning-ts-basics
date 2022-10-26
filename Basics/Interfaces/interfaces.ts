// Similar to type Alias. Used to create reusable, modular types that describe the shapes of objects.

// This is a type alias
type Point = {
  x: number,
  y: number
}

// This is an Interface. 
interface Point2 {
  x: number,
  y: number
}

const pt: Point = { x: 123, y: 321 };

// With the ?, it is an optional key. readonly is something we cannot change after we make a person.

// We can also throw in methods in our interfaces. 
interface Person {
  readonly id: number
  first: string,
  last: string,
  nickname?: string,
  sayHi: () => string,
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 123,
  sayHi: () => {
    return "Hello!";
  }
}

interface Product {
  name: string,
  price: number,
  applyDiscount(discount: number): number
}

const shoes: Product = {
  name: "Blue Shoes",
  price: 100,
  applyDiscount(amount: number) {
    let newPrice = this.price * (1 - amount)
    this.price = newPrice
    return this.price
  }
}

// We can add more properties to an interface. By making the same interface twice

interface Dog {
  name: string,
  age: number
}

interface Dog {
  breed: string,
  bark(): string
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Shepherd",
  bark() {
    return "Woof"
  }
}

// We can extend or inherent another Interface.

interface ServiceDog extends Dog {
  job: "Drug dog" | "Bomb" | "guide dog"
}

const chwey: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark"
  },
  job: "guide dog"
}

// Multiple Inheritance

interface Human {
  name: string
}

interface Employee {
  readonly id: number,
  email: string
}

interface Engineer extends Human, Employee {
  level: string,
  languages: string[]
}

const bob: Engineer = {
  name: 'Bob',
  id: 123,
  email: "bob@aol.com",
  level: 'Junior',
  languages: ['JS', "TS", "Ruby"]
}