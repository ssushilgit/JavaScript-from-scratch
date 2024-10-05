const accountId = 1;
let accountEmail = "shresthasushil741@gmail.com"
var accountPassword = "123456"
accountCity = "Damauli"
let accountState;

accountEmail = "sugamsth11@gmail.com"
accountPassword = "567890"  
accountCity = "Kathmandu"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Prefer not to use var for variable declaration due to issues in scope. Instead use let and const.
// let - let is blocke-scoped, meaning the variable is only accesible within the block it is defined(eg, for loop, if statement)
// var - var on the other hand is a function-scoped or globally-scoped, meaning it is accesible throughout the funcion or globally if declared outside the function 