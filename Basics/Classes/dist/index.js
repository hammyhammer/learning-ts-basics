"use strict";
// We still need to annonate the type 
// A primary difference between JS classes and TS classes is that we need to declare
// the type pror to the constructor. If we do not it will yell at us. 
class Player {
    constructor(first, last) {
        // We do not have to be specific if we assign something to the variable. Score in this
        // case is hardcoded in. All players will have the same starting score, but all players
        // will have different names, hence why we do not assign anything to them.
        // We could leave off the : number but it is good practice to be specific about it
        // With the private keyword, it cannot be accessed outside of the class. Similar to 
        // the JS #score. It can be used in TS but either will work. 
        this.score = 0;
        this.first = first;
        this.last = last;
        // Example of we can use private methods within the class but cannot access
        // them outside of the class
        this.privateMethod();
    }
    // Example of a private method
    privateMethod() {
        console.log("Secreeeeet");
    }
}
let hill = new Player("Cotton", "Hill");
