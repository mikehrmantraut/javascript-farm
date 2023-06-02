// ***************** number **************

// declaration of number data type
let price = 100
let tax = 0.18
let taxPrice  = price * tax
let totalPrice = price + taxPrice

console.log("Price: ", price, "tax price: ", taxPrice, "total price: ", totalPrice)

// increase and decrease
let counter = 0
counter = counter + 1
counter += 1
counter++;
console.log(counter)

counter --
counter -= 1
counter = counter - 1
console.log(counter)

// mode %
console.log(3 % 2)

// power ** 
console.log(2 ** 4)

// floor
console.log(Math.floor(1.8))

// ceil
console.log(Math.ceil(1.1))

// round
console.log(Math.round(1.4))
