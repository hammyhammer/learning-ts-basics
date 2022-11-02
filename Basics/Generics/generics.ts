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

indentity < Cat > {()}