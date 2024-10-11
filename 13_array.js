const myArray = [0, 1, 2, 3, 4, 5]
const players = ["Gyantey", "Sleepy", "KillerYT", "DeltaX", "XMPL"]
const myArray2 = new Array(1,2,3,4)
// console.log(myArray[3])   
// console.log(players[2])

// Array methods

myArray.push(6) // add an element at the end of the array
myArray.pop() // removes an element from end of the array

myArray.unshift(100) // adds an element at the start of an array
myArray.shift() // removes an element from the start of an array

// console.log(myArray.includes(6)) // false - boolean
// console.log(myArray.indexOf(5)) // 4

const newArray = myArray.join()
// console.log(newArray) // string
// console.log(myArray)

// Slice and Splice

console.log("A", myArray)
const myn1 = myArray.slice(1,3)
console.log(myn1)

console.log("B", myArray)
const myn2 =myArray.splice(1,3)

console.log("C", myArray)
console.log(myn2)

