// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is best")
    }
    // console.log(element)
}
// console.log(element) // not accesible


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop : ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop value ${j} and inner loop ${i}`)
        // console.log(i + "*" + j + "=" + i*j)
    }    
}


let myArray = ["Rohit Sharma", "Virat Kohli", "Jasprit Bumrah"]
// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

// break and continue
// break
for (let i = 1; i <= 20; i++) {
    if(i==5){
        // console.log(`${i} is detected`)
        break;
    }
    // console.log(`value of i is ${i}`)    
}   

// Output
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4


// Continue
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(`${i} is detected`)
        continue;
    }
    console.log(`value of i is ${i}`)    
}   

// Output
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 is detected
// value of i is 6
// value of i is 7
// value of i is 8