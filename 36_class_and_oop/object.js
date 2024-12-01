function multipleBy5(num){
    return num * 5
}
multipleBy5.power = 2
// console.log(multipleBy5(5))
// console.log(multipleBy5.prototype)


function createUser(username, score){
    this.username = username
    this.score = score
} 

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe   = function(){
    console.log(`The price  is ${this.score}`)
}

const chai = new createUser("Chai", 25)
const coffee =  createUser("Coffee", 250)

chai.printMe()