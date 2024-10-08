const name = "Sushil-Stha"
const repoCount = 34

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)  

// const courseName = new String('JavaScript')
const courseName = 'JavaScript'
// console.log(courseName)  // [String: 'JavaScript']

console.log(courseName[1])
console.log(courseName.__proto__)

console.log(courseName.length)
console.log(courseName.toUpperCase()) //JAVASCRIPT
console.log(courseName) //JavaScript 
// const data type stored at stack so even courseName.toUpperCase was used above, only the copy of the file was changed 
//strings, as primitive types, are stored in the stack, and any method that modifies them creates a new copy rather than altering the original value.

console.log(courseName.charAt(5)) // c
console.log(courseName.indexOf('S')) // 4

console.log(courseName.substring(1,5)) //avaS - cannot use negative indexing
console.log(courseName.slice(-8,5))  //vas - can use negative indexing


const newCourseName = "     React JS    "
console.log(newCourseName)
console.log(newCourseName.trim()) // removes whitespaces

const url = "https://sushil.com/sushil%shrestha"
console.log(url.replace('%', '-')) //https://sushil.com/sushil-shrestha

console.log(url.includes('sushil')) //returns true



const str = "Hello, this is Sushil Shrestha from Vyas-2 Damauli Tanahun"
const words = str.split('-')
console.log(words)