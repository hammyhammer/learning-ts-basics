// We can add multiple types to our annotions to variables 

// We want to be as strict as possible, this is a avenue we can do if we are unsure of a type
let age: number | string | boolean = 21;
age = 23
age = "24"
age = false

type Point = {
  x: number;
  y: number;
}

type Loc = {
  lat: number;
  long: number;
}

// We can use Union types with custom types

let coordinates: Point | Loc = { x: 1, y: 34 }
coordinates = { lat: 321.123, long: 123.43 }


// Functions with Union Types

function test(test: number | string): void {
  console.log(test)
}

// Will complain if we have multiple types for the price. We can work around it with conditions.
// This is an example of type narrowing. Using conditionals to break it down. 
function calculateax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = price.replace("$", "")
    price = parseFloat(price)
  }
  return price * tax
}

// Arrays with union types
// Use parameters to have types and the square bracket after. 
const stuff: (number | string)[] = [1, 2, "string", " "]

// We can also utilize custom types in this fashion
const coords: (Point | Loc)[] = []
coords.push({ lat: 321.2, long: 123.2 })
coords.push({ x: 123, y: 2 })

// Literal Types

// Literal types are immutable. 
let zero: 0 = 0

// We can use union types to give us options. But just for what we explicity say.
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad"

type DayOfWeekend = "Friday" | "Saturday" | "Sunday"

//This wouldn't work because Wednesday does not exist in DayOfWeekend
// let today: DayOfWeekend = 'Wednesday'