class User{
    constructor(username){
        this.username  = username
    }
    logMe(){
        return `Username is ${this.username}`
    }
}

class Teacher extends User {
    constructor(username, email, password){
        // User.call(this, username)
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        return `New course was added by ${this.username}`
    }
}

const chai = new Teacher("Sushil", "sushil@Qgmail.com", "123")
console.log(chai.addCourse())

// const masalaChai = new User("Sugam")
const masalaChai = new User("Sugam")
console.log(masalaChai.logMe())