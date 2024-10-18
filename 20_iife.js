// Immediately Invoked Function Expressions (IIFE)
// ()() - (function defination)(function execution call)

//for normal function
(function one(){
    console.log(`DB Connected`)
})();  // iife will immediately invoke the function but dont know where to stop the function so ; is needed

(function hello(){
    console.log(`DB Connected hello`)
})();

//for arrow functions
(()=>{
    console.log(`DB Connected hello again`)
})();

((username)=>{ // passing argument
    console.log(`DB Connected hello again ${username}`)
})('Arjun') // passing parameter