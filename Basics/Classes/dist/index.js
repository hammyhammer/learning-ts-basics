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
        // With protected, we can pass down private properties down to children classes.
        // If we left it as private, it does not go down to children classes
        this._score = 0;
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
    // Getters. A way to access information. Treated like a readonly
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    // Setters
    // Allows us to reassign a property outside of the class
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999;
    }
}
let hill = new Player('Hank', "Hill");
// This is another way of doing a class in TS. It is a shorthand way.
// Rather than putting our properties before the constructor, we can put them in
// the parameters
class Playa {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.privateMethod();
    }
    privateMethod() {
        console.log("Secreeeeet");
    }
}
let newPlayer = new Playa("Rufus", "Smith");
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log('Test');
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Gap", "blue");
// Abstract classes allow us to not make anymore instances of that class. 
// We can define methods ora pattern to use later. Basically saying something
// must exist
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello");
    }
}
// These classes must have the getPay method because of the abstract keyword.
// We call super to get the employee properties
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
let andrew = new FullTimeEmployee("Andrew", "Anderson", 60000);
console.log(andrew.getPay());
let Henry = new PartTimeEmployee("Henry", "Henderson", 15, 50);
