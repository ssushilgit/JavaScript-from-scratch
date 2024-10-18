 let a  = 1000
 if(true){
    let a =10
    const b= 20
    var c = 30
    // console.log("Inner value : ", a)
 }
//  console.log("Outer value : ", a)
//  console.log(b)
//  console.log(c)  


 function one(){
    const username = "sushil"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
 }

//  one()
 if(true) {
    const firstname ="Sushil"
    if (firstname === "Sushil"){
        const lastname = " Shrestha"
        // console.log(firstname + lastname) // the nested child if statement can access from the parent if statement
    }
    // console.log(lastname) //scope outside the second nested if
 }
//  console.log(firstname) // scope outside the first if


//  interesting technique to declare function

console.log(addOne(5)) // 6 because here the function is declared only
function addOne(num){
    return num + 1
}


console.log(addTwo(5))  // error because the function is declared and stored in a variable too. This concept is called hoisting
const addTwo = function(num){
    return num + 2 
}
