// for of loop not applicable for object, so we use another loop for in loop for objects
const myObj = {
    CPP : 'C++',
    JS : 'JavaScript',
    DSA : 'Data Structure and Algorithm'
}
for (const key in myObj) {
    // console.log(key) // for key
    // console.log(myObj[key]) // for value
    // console.log(`${key} is shortcut for ${myObj[key]}`)
}

const mySubjectArray = ["JavaScript", "Java", "C", "C++"]
for (const key in mySubjectArray) {
    // console.log(mySubjectArray[key])
}

const map = new Map()
map.set('IN', "India")
map.set('Ch', "China")
map.set('USA', "United States of America")
for (const key in map) {
//    console.log(key)  // for in loop not applicable for map
}