// Switch Syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) { // here, key is month. wherever the key matches in our code, the entire code 
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April"); 
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
        break;
}


// truthy and falsy values

// falsy values - false, 0, "", -0, BigInt 0n, null, undefined, NaN
// truthy values - true, [], {}, function(){}, "0", "sushil", "sugam", "false", {anything inside string is truthy}

// const username ="sushil@ai.com" 
// const username = ""
const username = []
if(username){
    console.log("Got user email")
} else {
    console.log("Dont have userr email")
}

// Example 1
if(username.length === 0){
    console.log("Array is empty")
}

// anothe example 
const emptyObj = {
    name: "Sushil"
}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
} else {
    console.log("Object is not empty")
}


// Nullish Coalescing Operator (??) : null undefined
// The nullish coalescing operator (??) returns the right-hand value if the left-hand value is null or undefined. Otherwise, it returns the left-hand value.

let val1;
// val1 = 5 ?? 10     // 5
// val1 = null ?? 10         // 10
// val1 = undefined ?? 15         // 15
val1 = null ?? 10 ?? 20 
// null ?? 10: Since the left operand is null, the expression evaluates to 10 (the right operand).
// 10 ?? 20: Since 10 is neither null nor undefined, the expression evaluates to 10.

console.log(val1)


// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice > 80 ? console.log("The price is greater than 80") : console.log("The price is less than 80")