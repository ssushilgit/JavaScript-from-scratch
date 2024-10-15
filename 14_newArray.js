
// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // [ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3])  // [ 'superman', 'flash', 'batman' ]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) // [ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]

const marvel_heros = ["thor", "spiderman", "ironman"]
const dc_heros = ["superman", "flash", "batman"]
const allNewHeros = [...marvel_heros, ...dc_heros] // When you do ...marvel_heros, it inserts all the elements of marvel_heros into the new array. Simcilarly, ...dc_heros spreads the elements of dc_heros into the same array.
// console.log(allNewHeros)

const another_array = [1,2,3, [4,5,6], 7, [6,7 [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// is, from and of

console.log(Array.isArray("Sushil"))
console.log(Array.from("Sushil"))
console.log(Array.from({name: "Sushil"})) // need to define from which the array should be defined, either from keys or from values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


