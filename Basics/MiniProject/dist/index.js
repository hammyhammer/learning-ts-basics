"use strict";
const btn = document.getElementById("btn");
// Without the ?, TS will yell at us saying the btn ccould be null. We get some control
// by saying its a maybe. 
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert("Clicked");
});
