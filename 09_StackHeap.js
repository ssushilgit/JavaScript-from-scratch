//  Stack (Primitive) 
let firstName = "Sushil Shrestha"

let anotherName = firstName
secondName = "Sugam Shrestha"

console.log(firstName)
console.log(secondName)

// firstName and secondName are strings, which are primitive types. These are stored in the stack.
// When you do let anotherName = firstName, the value of firstName (which is "Sushil Shrestha") is copied to anotherName. They now hold separate values in the stack.
// Changing secondName = "Sugam Shrestha" does not affect firstName, because they are independent copies.

// HEap (Non-primitive/Referencial)
let userOne = {
    userId : "one",
    email : "stha@gmail.com"
}

let userTwo = userOne

userTwo.email = "sugam@gmail.com"
console.log(userTwo)
console.log(userOne.email)
console.log(userTwo.email)

// userOne and userTwo are objects, which are non-primitive (reference types) and are stored in the heap.
// When you do let userTwo = userOne, you are not copying the object itself. Instead, both userOne and userTwo now point to the same object in the heap.
// Changing userTwo.email = "sugam@gmail.com" affects the email in the shared object. Therefore, both userOne.email and userTwo.email reflect the updated value.