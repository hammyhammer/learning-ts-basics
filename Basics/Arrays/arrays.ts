// We can annotate arrays like we do for variables.
const users: string[] = ["bob"]

const age: number[] = []
age.push(1)
age.push(192)

const boolean: boolean[] = [true]

// We can do an any type array
const any = []


// Different syntax
const different: Array<string> = ['test']

// Custom types. We can use these in our arrays.
type Point = {
  x: number,
  y: number
}

const coords: Point[] = []
coords.push({ x: 23, y: 8 })

//Multi dimensional. A single [] wouldn't work, we have to say that there are [][]
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"]
]