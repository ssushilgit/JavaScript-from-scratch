const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails:function(){
        // console.log("GOt user details from database")
        // console.log(`Username : ${this.username}`)
        // console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    return this
}

const UserDetailsOne = new User('Sugam', 8, 'true')
const UserDetailsTwo = new User('Sushant', 11, 'false')
console.log(UserDetailsOne) // the value is overriding so need to use new keyword. new keyword creates separate reference to each line
console.log(UserDetailsTwo)