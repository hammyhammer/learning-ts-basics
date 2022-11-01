// We still need to annonate the type 
// A primary difference between JS classes and TS classes is that we need to declare
// the type pror to the constructor. If we do not it will yell at us. 

class Player {
  // Readonly allows us to never change it again. Once it is set, you cannot modify it.

  // By default, all methods and classes are public unless otherwise. We can be
  // explicit about it by putting public keyword in. Public allows anyone to access
  // whatever information inside or outside of the class
  public readonly first: string;
  public readonly last: string;
  // We do not have to be specific if we assign something to the variable. Score in this
  // case is hardcoded in. All players will have the same starting score, but all players
  // will have different names, hence why we do not assign anything to them.
  // We could leave off the : number but it is good practice to be specific about it

  // With the private keyword, it cannot be accessed outside of the class. Similar to 
  // the JS #score. It can be used in TS but either will work. 
  private _score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    // Example of we can use private methods within the class but cannot access
    // them outside of the class
    this.privateMethod()
  }

  // Example of a private method
  private privateMethod(): void {
    console.log("Secreeeeet")
  }

  // Getters. A way to access information. Treated like a readonly
  get fullName(): string {
    return `${this.first} ${this.last}`
  }

  get score(): number {
    return this._score
  }

  // Allows us to reassign a property outside of the class
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative")
    }
    this._score = newScore
  }
}

let hill = new Player('Hank', "Hill")

// This is another way of doing a class in TS. It is a shorthand way.
// Rather than putting our properties before the constructor, we can put them in
// the parameters
class Playa {
  private score: number = 0;

  constructor(public first: String, public last: string) {
    this.privateMethod()
  }

  private privateMethod(): void {
    console.log("Secreeeeet")
  }


}

let newPlayer = new Playa("Rufus", "Smith")

