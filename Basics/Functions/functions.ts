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




console.log(person('Bob', 3, true))
console.log(greet('Bob'))
console.log(square(3))