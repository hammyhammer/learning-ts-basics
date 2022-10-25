// Tuples are unique in TS. They do not exist in JS.
// Array with a fixed length and ordered with specific types.

// We create a variable and then specifically say how we want our array to be ordered.
// if we add a string or another number (to increase elements to 4) we will get yelled at. 
const color: [number, number, number] = [255, 0, 255]

// We can have a mix type tuple, but the order matters.
// We can make a type as well. 
// The main idea is whatever the order we make our tuple, we must follow it. 
type HTTPResponse = [number, string]

const goodRes: HTTPResponse = [200, "OK"]
// After we declare this variable, we can do a push. Which will go against what a tuple is,
// but TS will not yell at us for it. Likewise we can pop it until the array is empty.

goodRes.push('Error')

// Tuples are situational. You won't use them all the time. But objects are seen as a better option. 