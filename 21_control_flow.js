// Various comparison operators -  <, >, <=, >=, ==, !=, ===
// if
const isUserLoggedIn = true
// if(2 === "2"){ // === operator not only check the value but also check the typeof
//      console.log("executed")
// }
// if(3 != "2"){
//     console.log("executed")
// }

const score = 200
// if(score > 100){
//     const power = "teleport"
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)

const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2")

// if else
const temperature = 47
// if(temperature === 47 ){
//     console.log("Temperature is less than 50")
// } else{
//     console.log("Temperature is greater than 50")
// }


// if else if...
// if(balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//     console.log("less than 750 ")
// } else if(balance <900){
//     console.log("less than 900 ")
// } else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true

if(userLoggedIn && debitcard){ // using && all conditions should be true
    console.log("You can buy anything")
}

if(loggedInFromEmail || loggedInFromGoogle){ // using ||, any one condition can be true
    console.log("User Logged In")
}