// ************** variable types and changing it's type *****************

// learn data type
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

// string to int/float
let number1 = "11"
number1 = parseInt(number1)
console.log("number1: ", number1, typeof(number1))

let number2 = "11px"
//let number2 = "px11px"
number2 = parseInt(number2)
console.log("number1: ", number2, typeof(number2))

let number3 = "11.4"
number3 = parseFloat(number3)
console.log("number3: ", number3, typeof(number3))

let number4 = 123
number4 = number4.toString()
console.log("number4:", number4, typeof(number4))
