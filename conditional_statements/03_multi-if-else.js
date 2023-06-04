// *************** multi conditional statements ***************

let userName = prompt("Your user name: ")
let age = prompt("Your age: ")

if (userName && age >= 18) {
    console.log("You can get a license.")
} else if (!userName) {
    console.log("You did not enter your user name.")
} else if (!(age >= 18)) {
    console.log("You did not enter your age or you are under 18.")
}
