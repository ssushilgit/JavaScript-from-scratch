// primitive data types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.2

const isLoggedIn = true
const outsideTemp = null
let useEmail;

// A Symbol is a unique and immutable primitive value. Even if two Symbol() functions are created with the same description (like '123' in this case), each Symbol is unique.
const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID)
// Although both id and anotherID have the same description ('123'), they are different, distinct symbols. Every time you call Symbol(), it creates a completely new and unique value. The === operator checks for strict equality, meaning both value and type must be the same. Since each symbol is unique, id and anotherID are not equal, so the comparison returns false.


const bigNumber = 123456789456123456n
console.log(typeof bigNumber) //bigint
console.log(typeof outsideTemp) //object

// non-primitive (referential data types)
// Array, Object and Function

const heros = ["Dr. Sanduk Ruit", "Anuradha Koirala", "Paras Khadka"]
let myObject = {
    name: "Sushil Shrestha",
    age: 22,
    contact: 9826121012
}

let myFunction = function () {
    console.log("This is function")
}

console.log(typeof heros)
console.log(typeof myObject)
console.log(typeof myFunction) // object function