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
function calcAge1(birthYear){
  return 2037 - birthYear;
}

const age1 = calcAge1(2001)

//function expression
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}  
const age2 = calcAge2(1988);

console.log(age1, age2);

// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(2010);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2001, 'Tiago'));