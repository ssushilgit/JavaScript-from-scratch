function myName() {
    console.log("S")
    console.log("U")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("L")
}

// myName()
// myName()

// function addTwoNumber(number1, number2){ //arguments
//     console.log(number1+number2)
// }
// addTwoNumber(5, 6) // parameters

function addTwoNumber(number1, number2){ //arguments
    let result = number1 + number2
    return result
}

const result = addTwoNumber(5, 6) // parameters
// console.log("Result : ", result)


// function loginUserMessage(username){
function loginUserMessage(username = "Sushil"){
    // if(username === undefined){
    if(!username) {
        return `Please enter a name`
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Sushil"))  
// console.log(loginUserMessage()) // undefined just logged in 
console.log(loginUserMessage("Sugam")) // even if username is declared in argument, it will override
