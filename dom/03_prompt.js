// ************** get info from user with prompt *************/

let fullName = prompt("Please enter your name: ", "")
console.log(fullName)

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style='color:red'>${fullName}</small>`
