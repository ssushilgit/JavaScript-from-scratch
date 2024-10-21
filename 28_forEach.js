const language = ["cpp", "js", "ruby", "c", "java", "python"]

language.forEach( function (item){
    // console.log(item)
} )  // this is a callback function for it doesnot need function name

// using arrow function
language.forEach( (item)=>{
    // console.log(item)
})

// forEach not only return item but also its index
language.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})

const myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName : '.js'
    },
    {
        languageName : 'Python',
        languageFileName : '.py'
    },
    {
        languageName : 'C Programming',
        languageFileName : '.c'
    }
]

myCoding.forEach( (item) => {
    console.log(`Language is ${item.languageName} and its extension is ${item.languageFileName}`)
})