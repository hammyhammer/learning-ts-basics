const btn = document.getElementById("btn")

// Without the ?, TS will yell at us saying the btn ccould be null. We get some control
// by saying its a maybe. 
btn?.addEventListener("click", function () {
  alert("Clicked")
})