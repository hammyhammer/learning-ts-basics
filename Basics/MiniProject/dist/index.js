"use strict";
// The ! at the end is telling TS to stop worrying, it is not null. 
// We can assert types with the DOM to be explicit and not hav eTS to worry
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
// Local storage to get the items
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
const todos = readTodos();
// Local storage to display our todos
todos.forEach(createTodo);
function handleSubmit(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
// Saving to local storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
    console.log(todos);
}
form.addEventListener("submit", handleSubmit);
// Without the ?, TS will yell at us saying the btn ccould be null. We get some control
// by saying its a maybe. 
// btn.addEventListener("click", function () {
//   alert(input.value)
//   input.value = ""
// });
// Type assertion.
// If for whatever reason we want to force a type onto a variable we can do the following:
// Unknown is a type, it wont think itself as a string, number, etc
// let mystery: unknown = "Hello World"
// We can add mystery as string to force it to be a string. Without it, it will yell at us about the length
// const numChars = (mystery as string).length
