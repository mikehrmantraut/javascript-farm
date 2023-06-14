// ******** function parameters and return ********

//let firstName = "Lorem"

function greetings(firstName, lastName) {
    console.log(`Merhaba ${firstName} ${lastName}`)
}

greetings('Baran', 'Munar')

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo('greeting', greetings2('Baran', 'Munar'))