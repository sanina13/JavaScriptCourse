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
//   friends: ['Andre', 'Luís', 'João']
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
//   friends: ['Andre', 'Luís', 'João'],
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

