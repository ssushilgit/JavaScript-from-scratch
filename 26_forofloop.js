// for of
const arr = [1,2,3,4,5,6]
for (const value of arr) {
    // console.log(value)
}

const greetings = "Hello Sushil"
for (const greet of greetings) {
    // console.log(`Character : ${greet}`)
} 

// Map
const map = new Map()
map.set('IN', "India")
map.set('Ch', "China")
map.set('USA', "United States of America")
map.set('IN', "India") // Duplicate key 
// console.log(map)

// for of for above map
for (const [key, value] of map) {
    // console.log(key, value)
}

const myObject = {
    game1 : "PUBG",
    game2 : "Freefire"
}
// for (const [key, value] of myObject) {  
//     console.log(key, value)
// }

// for of loop not applicable for object, so we use another loop for in loop for objects
