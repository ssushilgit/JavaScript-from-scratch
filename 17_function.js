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

function addTwoNumber(number1, number2){ 
    let result = number1 + number2
    return result
}

const result = addTwoNumber(5, 6) 
// console.log("Result : ", result)


function loginUserMessage(username){
// function loginUserMessage(username = "Sushant"){
    // if(username === undefined){
    if(!username) {
        return `Please enter a name`
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Sushil"))  
// console.log(loginUserMessage()) // undefined just logged in 
// console.log(loginUserMessage("Sugam")) // even if username is declared in argument, it will override


// another example using rest operator
function calculateCartPrice(...price){
    return price
}

function calculateAnotherCartPrice(price1, price2, ...price){
    return price
}

console.log(calculateCartPrice(199, 499, 999, 449, 1099))  // [ 199, 499, 999, 449, 1099 ]
console.log(calculateAnotherCartPrice(199, 499, 999, 449, 1099)) // [ 999, 449, 1099 ]

// Function with object
const user = {
    username: "Sushil",
    price: 1099
}
function handleObject(anyObject){
    return `Username is ${anyObject.username} and price is ${anyObject.price}`
}
// console.log(handleObject(user))
console.log(handleObject({  // another way to pass object
    username : "Sampurna",
    price: 199
}))

// Function with array
const myNewArray = [100, 200, 300, 400]
function handleArray(anyArray){
    return anyArray[2];
}
// console.log(handleArray(myNewArray))
console.log(handleArray([100, 200, 400, 500])) // another way to pass array