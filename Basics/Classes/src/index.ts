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
  public score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this
  }
}

let hill = new Player("Cotton", "Hill")
