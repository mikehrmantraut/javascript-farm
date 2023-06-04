// ************ short usage of if-else with ternary operator *************

let userName = prompt("Please enter your user name.")
let info = document.querySelector("#info")


// ternary usage
// statement ? if true : if not true

info.innerHTML = `${userName.length > 0 ? userName : "There is no information."}`

