// Tuples are unique in TS. They do not exist in JS.
// Array with a fixed length and ordered with specific types.

// We create a variable and then specifically say how we want our array to be ordered.
// if we add a string or another number (to increase elements to 4) we will get yelled at. 
const color: [number, number, number] = [255, 0, 255]