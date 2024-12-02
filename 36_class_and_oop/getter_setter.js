class User{
    constructor(email, password){
        this.email = email
        this. password = password
    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password.toUpperCase()}okay`
    }
    set password(value){
        this._password = value
    }
}

const sushil = new User("sushil@gmail.com", "abc")
console.log(sushil.password) 
console.log(sushil.email) 