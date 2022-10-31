
class Player {
  // Static is a way to give allow something to exist on a class rather than just 
  // individual methods.
  static desciption = "Player In Our Game"
  // This is a special case where JS will know that every instance of Player will
  // have this properties. We do not have to explicity call for it.
  #score = 0; // Only usable in the player class
  #numLives = 10; // Private field
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.score = 0;
    this.numLives = 10;
    console.log("Constructing")
  }

  // Using the get key word allows us to make a method to pull 
  // certain information from our class
  get fullName() {
    return `${this.first} ${this.last}`
  }

  // Set allows us to change different properties
  set fullName(newName) {
    const [first, last] = newName.split(' ')
    this.first = first;
    this.last = last;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive")
    }
    this.#score = newScore
  }
  // get score() {
  //   return this.#score
  // }


  taunt() {
    console.log("Get rekt")
  }

  loseLife() {
    numLives--
  }
}

// Extends allows us to utilize the same code we used for the Player class
class AdminPlayer extends Player {
  isAdmin = true
}

let admin = new AdminPlayer()
console.log(admin.taunt())
console.log(admin)
const player1 = new Player("Snoopy", "dawg")
player1.taunt()
console.log(player1.first)
console.log(player1.last)

console.log(player1.fullName)
player1.fullName = "Bobby Hill"
console.log(player1.fullName)