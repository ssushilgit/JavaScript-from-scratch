// const tinderUser = new Object() // singleton object

const tinderUser = {
}
tinderUser.id="001"
tinderUser.name="Bhuwan"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Sushil",
            lastname : "Shrestha"
        }
    }
}

// console.log(regularUser.fullname) // { userfullname: { firstname: 'Sushil', lastname: 'Shrestha' } }
// console.log(regularUser.fullname.userfullname) // { firstname: 'Sushil', lastname: 'Shrestha' }
// console.log(regularUser.fullname.userfullname.firstname) // Sushil

const newObject = {...regularUser, ...tinderUser}
// console.log(newObject)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}

const obj4 = Object.assign({}, obj1, obj2, obj3) // Object.assign(target, ...sources) 
// Here, {} becomes target and rest others becomes sources
// So, merging the properties of obj1, obj2, and obj3 into a new object obj4.

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "ram@gmail.com"
    },
    {
        id: 2,
        email: "gita@gmail.com"
    },
    {
        id: 3,
        email: "hari@gmail.com"
    }
]

console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // displays the keys in the tinderUser object
console.log(Object.values(tinderUser)) // displays the values in the tinderUser object
console.log(Object.entries(tinderUser)) // displays both keys and values in the tinderUser object


console.log(tinderUser.hasOwnProperty('id')) // hasOwnProperty method