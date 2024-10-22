
// const myTotal = myNums.reduce(function(accumulator, current_value){
    //     console.log(`accumulator : ${accumulator} and current_value : ${current_value}`)
    //     return accumulator + current_value
    // }, 0) // 0 is accumulator value
    
    // accumulator : 0 and current_value : 1
    // accumulator : 1 and current_value : 2
    // accumulator : 3 and current_value : 3
    // 6
    
// reduce
    
const myNums = [1,2,3]
const myTotal = myNums.reduce((accumulator, current_value)=>{
    return accumulator + current_value
}, 0)

// console.log(myTotal)

// Another example of reduce
const shoppingCart = [
    {
        courseName : "JavaScript",
        price : 4999
    },
    {
        courseName : "Python",
        price : 6999
    },
    {
        courseName : "Mobile App Development",
        price : 8999
    },
    {
        courseName : "Data Scientist",
        price : 13999
    },
    {
        courseName : "C++",
        price : 1099
    }
]

const myTotalPrice = shoppingCart.reduce((accumulator, current_value)=>{
    return accumulator + current_value.price
}, 0)
console.log(myTotalPrice)