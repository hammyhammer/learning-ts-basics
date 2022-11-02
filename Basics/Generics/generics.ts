const nums: number[] = [];
// This is a generic format of what is above. It is another option we could use.
const numbers: Array<number> = [];

// DOM generic example. The name in the <> is like a type argument
let inputElement = document.querySelector<HTMLInputElement>("#username")!;

let button = document.querySelector<HTMLButtonElement>("btn")!;