// singleton

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name : "Sushil",
    "Full Name" : "Sushil Shrestha",
    [mySym] : "mykey1", // symbol
    age: 22,
    location: "Damauli",
    email: "shresthasushil741@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.name)
// console.log(JsUser["Full Name"]) // another way to access object
// console.log(JsUser[mySym]) 

JsUser.email = "sugamsth11@gmail.com" // change the JsUser's email 
// console.log(JsUser["email"])
// Object.freeze(JsUser) // freeze the entire JsUser object so no changes can be made further 
JsUser.email = "ridewithsugam11@gmail.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this["Full Name"]}, your location is ${this.location}. `)
}
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 