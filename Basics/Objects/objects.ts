// Objects in TS are similar to objects in JS. However we do need to annotate our types.

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`)
}

printName({ first: 'Thomas', last: 'Jenkins' })

// Varibles and return types

let coordinate: { x: number, y: number } = { x: 34, y: 2 };

// We can set the return type of a function as an object if we want. 
function randomCoordinate(): { x: number, y: number } {
  return { x: Math.random(), y: Math.random() }
}

// The Example below will throw an error because on line 3, we do not declare age in the initially.
// printName({ first: "Potato", last: "head", age: 40 })

// However if make a new variable, even with keys that printName does not have, it does not throw errors.
// As long we have the properties that are defined, TS doesnt care about excess properties 
let toy = { first: 'potato', last: 'head', age: 40 }
printName(toy)

// Type Aliases
// Here, we are creating a reference to what we can use later
type Point = {
  x: number;
  y: number
};

let coordinateDos: { x: number, y: number } = { x: 34, y: 2 };

// So instead of this... we can change it too... 
function randomCoordinateDos(): { x: number, y: number } {
  return { x: Math.random(), y: Math.random() }
}

// This. The return type is more concise. 
function randomCoordinateTres(): Point {
  return { x: Math.random(), y: Math.random() }
}


// Or change this to....
function doublePoint(point: { x: number, y: number }): { x: number, y: number } {
  return { x: point.x * 2, y: point.y * 2 }
}

// This. We are just using the type Point to make our code more clean
function doublePointDos(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 }
}

// Nest Objects
// We can do a type alias to make everyone more cleaner. 
type Song = {
  title: string,
  artist: string,
  numStreams: number,
  credits: { producer: string, writer: string }
}

// We can utilize different properties of our song type
function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033
}

// We can utilize different properties of our song type
function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: 'Righteous Brothers',
  numStreams: 1235444,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North"
  }
}

const earnings = calculatePayout(mySong)
printSong(mySong)


// Optional Properties
// With the ? next to the z, it is telling TS that this property is not needed, it is optional
type Coordinates = {
  x: number;
  y: number;
  z?: number;
};

// Readonly Modifier
// Basically you cannot reassign whatever readonly is assoicated with. We cannot change user id to a different
// value
type User = {
  readonly id: number;
  username: string;

}

const user: User = {
  id: 1324,
  username: 'propaneluver'
}