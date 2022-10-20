// Functions are pretty similar to JS. We can do annotations for agruments as well. If we do not declare them, 
// they are considered "any"

// function square(num: number) {
//   return num * num
// }

function square(num) {
  return num * num
}

function greet(person) {
  return `Hi there, ${person}`
}

// Arrow function. Also how to do multiple arguments
const person = (person, age, isFunny) => {
  return person + age + isFunny
}

// const person = (person: string, age: number, isFunny: boolean) => {
//   return person + age + isFunny
// }

// To add a value to an agrument with an annotation
function greetAgain(person: string = 'Anakin') {
  return `Hi there, ${person}`
}

// TS can infer the type of a return. But we can declare it to be explicit 
function squareAgain(num: number): number {
  return num * num
}

// We could return whatever type. TS is able to detect what we could be looking for.. 
// such as a string on line 39 or number on line 41)
function random(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num
}

// Arrow function example
const add = (x: number, y: number): number => {
  return x + y
}

// Mapping for arrays. In this case, we do not have to decalre what type color would be in the map. TS knows 
// from the content within the colors array
let colors = ['red', 'blue', 'yellow'];
colors.map(color => {
  return color.toUpperCase()
})
console.log(colors)


console.log(person('Bob', 3, true))
console.log(greet('Bob'))
console.log(square(3))