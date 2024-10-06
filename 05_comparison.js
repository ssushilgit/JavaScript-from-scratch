
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1) // true
// In this case, JavaScript converts the string "2" to the number 2 for comparison because the > operator involves a number. The comparison becomes 2 > 1, which is true.

console.log("02" > 1) // true
// Similarly, JavaScript converts the string "02" to the number 2 (ignoring the leading zero). The comparison becomes 2 > 1, which is also true.


console.log(null > 0)
// Output: false
// In JavaScript, when comparing null with a number using relational operators (>, <, >=, etc.), null is first converted to a number, which becomes 0. So the comparison becomes 0 > 0, which is false.

console.log(null == 0)
// Output: false
// The == (loose equality) operator in JavaScript does not convert null to a number. Instead, null is only loosely equal to undefined but not to any other values, including 0. Therefore, null == 0 is false.

console.log(null >= 0)
// Output: true
// In this case, null is again converted to 0 for the comparison, so the statement becomes 0 >= 0, which is true.

console.log(undefined == 0)
console.log(undefined < 0)
console.log(undefined > 0)

console.log("2" === 2) // The output will be false because === is a strictly equality operator, which checks both value and its type. In this case "2" is a string and 2 is a number. Since the types are different, the result is false even though the values look similar