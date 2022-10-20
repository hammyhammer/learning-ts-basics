// Objects in TS are similar to objects in JS. However we do need to annotate our types.

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`)
}

printName({ first: 'Thomas', last: 'Jenkins' })

// Varibles and return types

let coordinate: { x: number, y: number } = { x: 34, y: 2 };

// We can set the return type of a function as an object if we want. 
function randomCoordinate(): { x: number, y: number } {
  return { x: Math.random(), y: Math.random() }
}

// The Example below will throw an error because on line 3, we do not declare age in the initially.
printName({ first: "Potato", last: "head", age: 40 })

// However if make a new variable, even with keys that printName does not have, it does not throw errors.
// As long we have the properties that are defined, TS doesnt care about excess properties 
let toy = { first: 'potato', last: 'head', age: 40 }
printName(toy)
