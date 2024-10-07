let name1 = "Sugam"
console.log(name1)
console.log(name1.length) // properties

let name2= "Sugam\""
console.log(name2)
console.log(name2.length) // seems like 7 characters but it's only 6

console.log(name1.toUpperCase()) // toUpperCase() is a function so () should be used
console.log(name1.toLowerCase()) // toLowerCase() converts all characterst to lowercase

let sentence = "This is Javascript Basic Course."
console.log(sentence.slice(5,12 )) // prints character from index number 5 to 12
console.log(sentence.slice(5)) // prints characters from index number 5 to all the way down to the end

console.log(name1.replace("Sushil","Sushant"))  // Sushil is replaced by Sushant in name1
console.log(sentence) // original sentence
console.log(sentence.replace("Basic","Intermediate")) //Basic replaced by Intermediate in sentence 

console.log(name1.concat(name2)) // concatinate name1 with name2
console.log(sentence.concat("Learning JS is fun.")) //concatinate strings with sentence variable

let name3 = "   Sushil      "
let newName3 = name3.trim() //removes whitespaces
console.log(name3)
console.log(newName3) 

let fr="Ritesh" + "Saroj" + "Dhakal"
console.log(fr)
for (let i in fr){
    console.log(fr[i])
}