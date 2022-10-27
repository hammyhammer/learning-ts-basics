// The ! at the end is telling TS to stop worrying, it is not null. 
const btn = document.getElementById("btn")!

// Without the ?, TS will yell at us saying the btn ccould be null. We get some control
// by saying its a maybe. 
btn?.addEventListener("click", function () {
  alert("Clicked")
});

// Type assertion.
// If for whatever reason we want to force a type onto a variable we can do the following:
// Unknown is a type, it wont think itself as a string, number, etc
// let mystery: unknown = "Hello World"

// We can add mystery as string to force it to be a string. Without it, it will yell at us about the length
// const numChars = (mystery as string).length