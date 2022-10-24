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

let coordinates: Point | Loc = { x: 1, y: 34 }
coordinates = { lat: 321.123, long: 123.43 }