'use strict';
/*
function calcAge(birthYear) {
  const age = 2034 - birthYear;
  console.log(firstName);
  return age;
}

const firstName = 'Tiago';
calcAge(2001);
*/
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Tiago';
var job = 'Programmer';
const year = 2001;
*/

//Functions
/*
console.log(addDecl(2, 4));
console.log(addArrow(3, 4));

function addDecl(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
*/

// Example
/*
if (!numProduct) deleteShoppingCart();

let numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
*/
/*
var x = 1;
let y = 2;
const z = 3;

console.log(y === window.y);
*/
/*
console.log(this);
*/
/*
const calcAge = function (birthYear) {
  console.log(this);
};

calcAge();

const calcAgeArrow = birthYear => {
  console.log(this);
};

calcAgeArrow();

const jonas = {
  year: 2001,
  calcAge: function () {
    console.log(this);
  },
};

jonas.calcAge();*/
/*
const jonas = {
  firstName: 'Jonas',
  year: 2001,
  calcAge: function () {
    console.log(this);

    //const self = this; // solution for have a function inside a method and use the this for the this not be undefined! Self or that, solution before ES6
    /*
    const isMillenial = function () {
      console.log(self.year);
    };
    */

// ES6 solution use a arrow function when you have to put a function inside a method because the arrow function recieve the this keyword from the method
/*  const isMillenial = () => console.log(this.year);

    isMillenial();
  },
  //dont use arrow functins as methods!
  greet: () => console.log(`Hey ${this.firstName}`),
};*/

//jonas.calcAge();
/*
//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5, 8, 12);

// Arrow dont have arguments!
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

//Primitives vs Objects
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Tiago',
  age: 20,
};

const friend = me;

friend.age = 21;

console.log(me);
console.log(friend);
*/

// Copying objects

const joao = {
  name: 'Tiago',
  age: 20,
  family: ['Alice', 'Bob'],
};

const joaoCopy = Object.assign({}, joao); // Apenas cria uma cópia superficial e não um clone profundo, quando tem um objeto dentro do objeto altera nos dois lugares!!
joaoCopy.age = 30;
console.log(joao.age);
console.log(joaoCopy.age);

joaoCopy.family.push('Mary');
joaoCopy.family.push('John');

console.log(joao);
console.log(joaoCopy);
