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