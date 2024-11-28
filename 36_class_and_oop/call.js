function SetUsername(username){
    this.username = username
    // console.log("Called")
}

function createUser(username, email, password){
    SetUsername.call(this, username )
    this.email = email
    this.password = password
}

const sushil = new createUser("sushil", "hello@gmail.com", "123")
console.log(sushil)