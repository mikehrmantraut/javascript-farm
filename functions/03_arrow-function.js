// *********** Arrow Function Usage ***********

function hello(name) {
    console.log(`Hello ${name}`)
}

hello('Javascript')

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1('helloFuncV1')

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2('helloFuncV2')

const helloFuncV3 = (firstName, lastName) =>
console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3('Baran', 'Munar')

const helloFuncV4 = (firstName, lastName) => {
let info = `Merhaba ${firstName} ${lastName}`
console.log(info)
return info
}
helloFuncV4('Osman', 'Korkmaz')