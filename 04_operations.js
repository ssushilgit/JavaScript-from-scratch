let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)     4
// console.log(2-2)     0
// console.log(2*2)     4
// console.log(2**3)    8
// console.log(2/2)     1
// console.log(2%2)     0

let str1 = "Hello"
let str2 = " Sushil"
let str3 = str1 + str2
// console.log(str3)

console.log("1" + 2)    // 12
console.log(1 + "2")    // 12 //when the + operator is used with a string and another data type (like a number), string concatenation takes precedence over addition. JavaScript automatically converts the non-string value to a string and concatenates them. 
console.log("1" + 2 + 2)    // 122
console.log(1 + 2 + "2")    //32


let gameCounter = 100
console.log("gameCounter++ = ", gameCounter++) // gameCounter output will be 100 but its value will be 101 because of the postfix ++ operator
console.log("++gameCounter = ", ++gameCounter) // gameCounter value is already 101 so the prefix ++ operator will increase the value by 1 and later display the output 102
console.log(gameCounter)