// *********** String Data Type Operations ****************
let email = "baran_3430@amazon.com"
let firstName = "Baran"
let lastName = "Munar"


// number of characters in string
console.log(email.length)

// first element of string
console.log(firstName[0])
console.log(firstName.charAt(0))

// uppercase - lowercase
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// search
console.log(email.search("@"))
console.log(email[10]) 
console.log(email.search('asd')) // -1

// slice
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

// index0f()
console.log(DOMAIN.indexOf('.'))
console.log(DOMAIN.slice(0, DOMAIN.indexOf('.')))

// replace
email = email.replace('amazon', 'microsoft')
console.log(email)

// includes => true false
console.log(email.includes("@"))

// startsWith endsWith
console.log(email.endsWith(".com"))
console.log(email.startsWith("abc"))

// capitalize
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)
