const user = { 
    username : "sushil",
    price : 1099,

    welcomeMessage : function() { 
        console.log(`${this.username}, welcome to the jungle.`) // Logs "sushil, welcome to the jungle."
        console.log(this) // Logs the `user` object.
    } 
}

// user.welcomeMessage() // Calls the method, logs the initial message with "sushil" and the object.
// user.username = "sugam" // Updates username to "sugam".
// user.welcomeMessage() // Calls the method again, logs the updated message with "sugam" and the object.

// console.log(this) // {} - Logs global `this` (window in browsers, global in Node.js).


// function one(){
//     let username = "sam"
//     console.log(this.username) // undefined
// }

// const one = function(){
//     let username = "sam"
//     console.log(this.username)
// }


const one = () =>{  // arrow function
    let username = "sam"
    console.log(this.username)
}
// one()  

// implicit return - need to use return keyword and {}
// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// explicit return - no need to use return keyword and {}
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(4,5))