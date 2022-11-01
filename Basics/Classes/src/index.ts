// We still need to annonate the type 
// A primary difference between JS classes and TS classes is that we need to declare
// the type pror to the constructor. If we do not it will yell at us. 

class Player {
  first: string;
  last: string;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

let hill = new Player("Cotton", "Hill")
