'use strict';

// function logger(){
//   console.log('Hello world')
// }

// logger();

// function fruitProcessor(apples, oranges){
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0)

// console.log(appleJuice);

// const appleOrangeJuice  = fruitProcessor(2, 4)
// console.log(appleOrangeJuice);

// function declaration
// function calcAge1(birthYear){
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(2001)

// //function expression
// const calcAge2 = function (birthYear){
//   return 2037 - birthYear;
// }  
// const age2 = calcAge2(1988);

// console.log(age1, age2);

// // Arrow functions

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(2010);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2001, 'Tiago'));

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }
// function fruitProcessor(apples, oranges){
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

  
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear){
//   return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0){
//     return `${firstName} retires in ${retirement} years`;
//   }else{
//     console.log(`${firstName} is already retired!`);
//     return -1;
//   }

  
// }

// console.log(yearsUntilRetirement(1930, 'Tiago'))
// Arrays

//const friends = ['Michal', 'Steven', 'Peter'];
//console.log(friends);

//Arrays methods
// const friends = ['Michal', 'Steven', 'Peter'];
// friends.push('Jay');
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// frinds.pop(); // remove the last element
// friensa.shift(); // remove the first element

// console.log(friends.indexOf('John'));

// // modern way to see if an element exist in the arrat - includes

// console.log(friends.includes('John'));//return true or false

//Objects

// const tiago = {
//   firstName: 'Tiago',
//   lastName: 'Sanina',
//   age: 2022 - 2001,
//   job: 'Programmer',
//   friends: ['Andre', 'Lu??s', 'Jo??o']
// }
// console.log(tiago.lastName);
// console.log(tiago['lastName'])

// const nameKey = 'Name';
// console.log(tiago['first' + nameKey])
// console.log(tiago['last' + nameKey]);

// const tiago = {
//   firstName: 'Tiago',
//   lastName: 'Sanina',
//   birthYear: 1991,
//   job: 'Programmer',
//   friends: ['Andre', 'Lu??s', 'Jo??o'],
//   hasDriversLicense: false,

//   // calcAge: function(birthYear){ // method
//   //   return 2037 - birthYear;
//   // }

//   // calcAge: function(){
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function(){
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function(){
//     if(this.hasDriversLicense){
//       return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has a driver's license`
//     }else{
//       return `${this.firstName} is a ${this.age}-year old ${this.job}, and he dont have a driver's license`
//     }
//   }
// };

// console.log(tiago.getSummary());
// //console.log(tiago['calcAge'](1991));
/*
const tiago = [
  'Tiago',
  'Sanina',
  2022 - 2001,
  'Programmer',
  ['Andre', 'Lu??s', 'Jo??o']
];

const types = [];

for(let i = 0; i < tiago.length; i++){
  console.log(tiago[i]);

  //types[i] = typeof tiago[i];

  types.push(typeof tiago[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break 
console.log("==== ONLY STRINGS ====")
for(let i = 0; i < tiago.length; i++){
  if(typeof tiago[i] !== 'string') continue;
  console.log(tiago[i], typeof tiago[i]);
}

console.log("==== BREAK WITH NUMBER====")
for(let i = 0; i < tiago.length; i++){
  if(typeof tiago[i] === 'number') break;
  console.log(tiago[i], typeof tiago[i]);
}*/
/*
const tiago = [
  'Tiago',
  'Sanina',
  2022 - 2001,
  'Programmer',
  ['Andre', 'Lu??s', 'Jo??o']
];
*/
/*for(let i = tiago.length - 1; i >= 0; i--){
  console.log(tiago[i]);
}*/
/*
for (let exercise = 1; exercise < 4; exercise++){
  console.log(`-------- Strating exercise ${exercise}`);
  for(let rep = 1; rep < 6; rep++){
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
  }
}
*/
/*
for(let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weight repetition ${rep}`);
}

let rap = 1;
while(rap <= 10){
  console.log(`Lifting weight repetition ${rap}`);
  rap++;
}
*/
/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/


