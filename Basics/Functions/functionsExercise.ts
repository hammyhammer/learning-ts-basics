// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer('Elton') => One for Elton, one for me

// Without annotations
function twoFer(person) {
  if (person !== '') {
    return `One for ${person}, one for me`
  }
  else {
    return 'One for you, one for me'
  }
}

console.log(twoFer('Johnny'))

// With annotations
// function twoFer(person: string): string {
//  if (person !== '') {
//     return `One for ${person}, one for me`
//  }
//  else {
//    return 'One for you, one for me'
//  }
// }


// Wrtie a isLeapyear() function that accepts a year and returns true or
// false depending on if the year is a leap year
// isLeapyear(2012) => True
// isLeapyear(2015) => false

// Without annotations
function isLeapyear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true
  }
  return false
}

// With annotations
// function isLeapyear(year: number): boolean {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true
//   }
//   return false
// }

console.log(isLeapyear(1016))