// ******* session summary exercise *******

let grade = prompt("Please enter your exam grade.")
let textInfo; 

if (grade >= 90 && grade <= 100) {
    textInfo = "AA"
} else if (grade >= 85 && grade <= 89) {
    textInfo = "BA"
} else if (grade >= 80 && grade <= 84) {
    textInfo = "BB"
} else if (grade >= 75 && grade <= 79) {
    textInfo = "CB"
} else if (grade >= 70 && grade <= 74) {
    textInfo = "CC"
} else if (grade >= 65 && grade <= 69) {
    textInfo = "DC"
} else if (grade >= 60 && grade <= 64) {
    textInfo = "DD"
} else if (grade >= 50 && grade <= 59) {
    textInfo = "FD"
} else if (grade <= 49 && grade >= 0) {
    textInfo = "FF"
} else {
    textInfo = "Please enter your grade correctly."
}

console.log(textInfo)
