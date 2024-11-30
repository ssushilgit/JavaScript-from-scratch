class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}xyz`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const sushil = new User("Sushil", "sushil@gmail.com", "123")
console.log(sushil)
console.log(sushil.encryptPassword())
console.log(sushil.changeUserName())

//  behind the scene
// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}xyz`
// }
// User.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`
// }

// const sugam = new User("Sugam", "sugam@gmail.com", "123")
// console.log(sugam)
// console.log(sugam.encryptPassword())
// console.log(sugam.changeUserName())
