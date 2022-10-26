// Similar to type Alias. Used to create reusable, modular types that describe the shapes of objects.

// This is a type alias
type Point = {
  x: number,
  y: number
}

// This is an Interface. 
interface Point2 {
  x: number,
  y: number
}

const pt: Point = { x: 123, y: 321 }