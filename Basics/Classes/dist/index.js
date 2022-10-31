class Player {
  constructor(first, last) {
    this.first = first;
    this.last = last;
    console.log("Constructing")
  }
  taunt() {
    console.log("Get rekt")
  }
}

const player1 = new Player("Snoopy", "dawg")
player1.taunt()
console.log(player1.first)
console.log(player1.last)