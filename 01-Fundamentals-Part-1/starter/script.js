/*Values and Variables!
let country = "Portugal";
let continent = "Europe";
let population = 10000000;
console.log(`I'am current living in ${country} in ${continent}, and my country have around ${population} people!`);*/

/*
Data Types - Number/String/Boolean --- Undefine/Null/Symbol/BigInt(ES2020)
class
let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);

javaScriptIsFun = 'YES!'
console.log(typeof javaScriptIsFun);

let benficaLisboa
console.log(typeof benficaLisboa)

benficaLisboa = 1904
console.log(typeof null)

--- ex ---
let isIsland = false;
let language;

console.log(typeof isIsland, typeof language, typeof country, typeof population);

//let, const and var
/*let age = 19;
age = 2011;

const birthYear = 2001;
*/

//Basic Operators

/*const currentYear = 2037
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);

const firstName = 'Tiago';
const lastName = 'Sanina';
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
console.log(x)*/

// Convert String -> Number Number(String)  Number -> String String(Number)

/* type Coercion

console.log('I am ' + 23 + ' years old');// O '+' transforma os valores todos em Strings

console.log('23' - '10' - 3) // O '-', '*', '/' transforma os valores todos em Number
*/

// 5 falsy values: 0, '', undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}))*/


// === is better, avoid using the == 

/*const favourite = Number(prompt("what's your favorite number?"));
console.log(typeof favourite);
if(favourite === 23){
  console.log("cool, 23 is an amazing number")
}else if(favourite === 7){
  console.log("cool, 7 is an awesome number")
}else{
  console.log("Number is not 23 or 7")
}*/

// != or !==, !== is better to use 

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);

// if(hasDriversLicense && hasGoodVision){
//   console.log('Sarah is able to drive!');
// }else{
//   console.log('Someone else should drive...');
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//   console.log('Sarah is able to drive!');
// }else{
//   console.log('Someone else should drive...');
// }

// const day = "monday";

// switch(day){
//   case "monday":
//     console.log("Running outside");
//     break;
//   case "tuesday":
//     console.log("Running inside");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Running outside for 1 hour");
//     break;
//   case "friday":
//     console.log("Running for 2 hours");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Just rest inside your home");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if(day === "monday"){
//   console.log("Running outside");
// }else if(day === "tuesday"){
//   console.log("Running inside");
// }else if(day === "wednesday" || day === "thursday"){
//   console.log("Running outside for 1 hour");
// }else if(day === "friday"){
//   console.log("Running for 2 hours");
// }else if(day === "saturday" || day === "sunday"){
//   console.log("Just rest inside your home");
// }else{
//   console.log("Not a valid day");
// }

// const age = 23;

// const drink = age >= 18 ? "I like to drink wine!" : "I like to drink water!";

// console.log(drink);
