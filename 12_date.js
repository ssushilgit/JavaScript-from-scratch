// Dates
let myDate = new Date()
console.log(myDate) // 2024-10-10T17:38:49.461Z
console.log(myDate.toString()) // Thu Oct 10 2024 23:23:49 GMT+0545 (Nepal Time)
console.log(myDate.toLocaleString()) //10/10/2024, 11:31:09 PM
console.log(myDate.toDateString()) // Thu Oct 10 2024
console.log(myDate.toISOString()) // 2024-10-10T17:38:49.461Z
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString()) // 10/10/2024
console.log(myDate.toLocaleTimeString()) // 11:29:28 PM
console.log(typeof myDate) // object

// let myCreatedDate = new Date(2000, 5, 20)
// let myCreatedDate = new Date(2003, 5, 26, 15, 25)
// let myCreatedDate = new Date("2024-12-11")
let myCreatedDate = new Date("06-20-2024")
// console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.toLocaleString())
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))
