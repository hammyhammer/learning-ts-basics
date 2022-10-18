// tsc variables.ts will create a js file of what we make in ts. 
// Once you compile the TS file. You get a JS version of it. 

let movieName = "Forrest Gump";
movieName = "district 9"
console.log(movieName)

// Once you set a variable to certain data type, you cannot change it 
// For Example

let string = 'string'
string = 9

// Will not work.

// We can use the Any type to work around this. But it defeats the purpose of TS
// I am getting an error saying that : is a unpected token though.. 
// let whatever: any = "test"
// whatever = 1
// console.log(whatever)

// Or you can just not give a variable a set value. 
let anything;

anything = 'string'
anything = 9

console.log(anything)




