// const language = ["cpp", "js", "ruby", "c", "java", "python"]

// const values = language.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)

// filter
// Filters elements of an array based on a condition and returns a new array containing only the elements that pass the test (i.e., the condition evaluates to true). 
// A new array with only the elements that satisfy the condition. The length of the new array might be shorter than the original.

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> {   // myNums.filter((num) => num > 4) 
    return num > 4
})

// const newNums = []
// myNums.forEach((num)=>{
//     if(num > 6){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    { 
        title: 'Book One',
        genre: 'History',
        publish: 2011,
        edition: 2015
    },
    { 
        title: 'Book Two',
        genre: 'Science Fiction',
        publish: 1990,
        edition: 2016
    },
    { 
        title: 'Book Three',
        genre: 'History',
        publish: 2010,
        edition: 2013
    },
    { 
        title: 'Book Four',
        genre: 'Biography',
        publish: 1999,
        edition: 2012
    },
    { 
        title: 'Book Five',
        genre: 'History',
        publish: 2015,
        edition: 2018
    },
    { 
        title: 'Book Six',
        genre: 'Romance',
        publish: 1987,
        edition: 2014
    },
    { 
        title: 'Book Seven',
        genre: 'Thriller',
        publish: 1996,
        edition: 2019
    },
    { 
        title: 'Book Eight',
        genre: 'Self-help',
        publish: 2020,
        edition: 2021
    },
    { 
        title: 'Book Nine',
        genre: 'Travel',
        publish: 2001,
        edition: 2017
    } 
];

// const userBooks = books.filter((bk)=>bk.genre ==='History')
const userBooks = books.filter((bk)=>{
    return bk.publish >= 2000 && bk.genre === 'Travel'
})
console.log(userBooks)