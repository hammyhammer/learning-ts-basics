const nums: number[] = [];
// This is a generic format of what is above. It is another option we could use.
const numbers: Array<number> = [];

// DOM generic example. The name in the <> is like a type argument
let inputElement = document.querySelector<HTMLInputElement>("#username")!;

let button = document.querySelector<HTMLButtonElement>("btn")!;

// ==============================================================

// Identity is a common name to use for generics
function numberIdentity(item: number) {
  return item
}

function stringIdentity(item: string) {
  return item
}

function booleanIdentity(item: boolean) {
  return item
}

//Any types defeats the purpose of Typescript. 
function identity(item: any): any {
  return item
}

function indentity<Type>(item: Type): Type {
  return item
}
// Above: Type can be written as just T. It could be anything but it is mostly T
// TS will know it will be a number, even though we put Type above. We can take
// advantage of it and customize with it.  
indentity<number>(7)
indentity<string>('7')

interface Cat {
  name: string;
  breed: string;
}

// indentity < Cat > {()}

// Generics will spit out what is provided to them when we call the function
function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.random() * list.length
  return list[randomIndex]
}

getRandomElement<string>(['a', 'c', 'x'])

// TS can infer types. Same deal with our getRandomElement function. We do not have
// leave a type parameter.

getRandomElement(['a', 'c', 'x'])

//We can avoid the any type by amking it a generic. 
// Extends keyword is saying they have to be object (Or whatever we want).
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2
  }
}


const comboObj = merge({ name: "bob" }, { job: "software developer" })


interface Lengthy {
  length: number
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2
}