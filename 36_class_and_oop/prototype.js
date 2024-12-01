 let myName = "sushil     "
 let myChannel = "youtube    "
//  console.log(myName.truelength)


 let myHeros = ["thor", "spiderman"]

 let heroPower = {
    thor : 'hammer',
    spiderman : 'sling ',

    getSpiderPower : function(){
        // console.log(`Spidy power is ${this.spiderman}`)
    }
 }

 Object.prototype.sushil = function(){
    // console.log(`sushil is present in all objects`)
 }

 Array.prototype.heysushil =function(){
    // console.log(`sushil is available`)
 }

// myHeros.sushil()
// heroPower.sushil()
// heroPower.heysushil()
// myHeros.heysushil()

// Inheritance
const User = { 
    name : "coffe",
    email: 'coffee@gmail.com'
}

const Teacher = {
    makeVideos : true
}

Teacher.__proto__ = User  // Teacher can access all properties of USer  

const TeachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport can access all properties of Teacher



let anotherUserName = "Sushil        "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUserName.truelength()
"sugam".truelength()
"iceTea".truelength()