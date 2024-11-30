class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `Username is ${this.username}`
    }

    static createId(){
        return `123`
    }
}

const sushil = new User("Sushil")
// console.log(sushil.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@apple.np")
// console.log(iphone.createId())
console.log(iphone.createId())