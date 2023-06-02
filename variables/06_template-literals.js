// ************ Template Literals ****************

let userName = "mikehrmantraut"
const DOMAIN = "github.com"

let email = DOMAIN + "/" + userName
console.log("Hi", userName, "welcome!", "Your mail address:", email)

let info = `Hi ${userName} welcome!
Your mail address: ${email}
length of your mail address:${email.length}
your salary: ${(4 + 5) * 10} TL
time: ${new Date().getHours()}:${new Date().getMinutes()}
`
console.log(info)



