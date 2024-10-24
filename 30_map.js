// map
// Transforms every element of an array and returns a new array with the same length as the original.
// A new array with the results of calling the provided function on every element.

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num)=>{
//     return num+10
// })

const newNums = myNumbers
                .map((num) => num * 10) // 10,20,30,40,50,60,70,80,90,100
                .map((num) => num + 5)  // 15,25,35,45,55,65,75,85,95,105
                .filter((num) => num > 40) //  45, 55,  65, 75,  85, 95, 105

console.log(newNums)