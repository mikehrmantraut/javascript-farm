// *********** boolean ***************

let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

console.log(Boolean("11")) // true
console.log(Boolean("0")) // true
console.log(Boolean("")) // false

console.log(Boolean(0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(-0.1)) // true
console.log(Boolean(0 == 0))
