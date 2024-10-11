// numbers
const score = 400
// console.log(score) // 400
// console.log(typeof score) // number

const balance = new Number(100) //[Number: 100]
// console.log(balance) 

// console.log(balance.toString()) // 100
// console.log(balance.toString().length) // 3
// console.log(balance.toFixed(2)) // 100.00

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)) // 124 - returns precise value 
// console.log(otherNumber.toPrecision(4)) // 123.9

 const hundreds = 10000000
//  console.log(hundreds.toLocaleString('en-IN'))  // 1,00,00,000 - generate commas according to US standard but using en-IN generates commas in Indian Standardss

 // maths

//  console.log(Math.abs(-4)) // 4 - absolute value
//  console.log(Math.PI) // 3.141592653589793 - generates pi value
//  console.log(Math.round(4.4)) //4 
//  console.log(Math.ceil(4.4)) // 5
//  console.log(Math.floor(4.4)) // 4
//  console.log(Math.min(4, 5, 15, 2, 89)) // 2 - generates lower value in an array

 console.log(Math.random()) // Math.random generates values between 0 and 1 
 console.log((Math.random()*10) +1) // Math.random() * 10 scales this number to be between 0 and 10 (exclusive). (Math.random() * 10) + 1 shifts the range up by 1, making the random number fall between 1 and 11 (exclusive).
 console.log(Math.floor(Math.random()*10) +1) 

 const minAge = 18
 const maxAge = 45

 console.log(Math.round(Math.random() * (maxAge - minAge + 1)) + minAge)