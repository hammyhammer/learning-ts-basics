// Objects in TS are similar to objects in JS. However we do need to annotate our types.

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`)
}

printName({ first: 'Thomas', last: 'Jenkins' })