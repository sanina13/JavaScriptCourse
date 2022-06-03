'use strict';
/*
//Challenge2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...scoredPlayers) {
    console.log(scoredPlayers);
    console.log(`The team scores: ${scoredPlayers.length} goals`);
  },
};
//1.
for (const [goal, scorer] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${scorer}`);
}
//2.
const entires = Object.entries(game.odds);
let average = 0;
for (const [, odd] of entires) {
  average += odd;
}
console.log(average / Object.values(game.odds).length);
//3.
/*
console.log(`Odd of victory ${game.team1}: ${Object.values(game.odds)[0]}`);
console.log(`Odd of Draw: ${Object.values(game.odds)[1]}`);
console.log(`Odd of victory ${game.team2}: ${Object.values(game.odds)[2]}`);
*/
/*
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

//Challenge1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...scoredPlayers) {
    console.log(scoredPlayers);
    console.log(`The team scores: ${scoredPlayers.length} goals`);
  },
};

//Right solution
//1.
const [players1, players2] = game.players;
console.log(players1, players2);
//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, team2, draw);
//6.
const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
/*
/*
//My solution
const [GK, ...fieldPlayers] = [...game.players[0]];
const players1 = [GK, fieldPlayers];
console.log(players1);

const players2 = [...game.players[1]];
console.log(players2);

const allPlayers = [...game.players];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const team1 = game.odds.team1;
const team2 = game.odds.team2;
const draw = game.odds.x;
console.log(team1, team2, draw);

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

console.log(
  team2 &&
    `A equipa com maior probabilidade de Vencer é a equipa 1 com uma Odd de ${team1}`
);
*/
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enchanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicius pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    if (otherIngredients.length === 0) {
      console.log(
        `A sua pizza tem apenas um igrediente que é ${mainIngredient}.`
      );
    } else {
      console.log(
        `A sua pizza vai ter como ingrediente Principal ${mainIngredient}, para complementar a sua pizza terá os restantes ingredientes: ${otherIngredients}.`
      );
    }
  },
};
//Maps iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);
//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration map Quizz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt(question.get('question')));
const answer = 3;

console.log(question.get(question.get('correct') === answer));
/*
//My solution
if (answer === 2 || answer === 1) {
  console.log(question.get(false));
} else {
  console.log(question.get(true));
}
*/

//Convert map to array

console.log([...question]);
//console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
//Maps usamos para mapear valores para chaves
const rest = new Map(); // Maneira mais facil de criar um mapa é deixar o mesmo vazio
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

console.log(rest.has('Categories'));
rest.delete(2);
//rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
/*
//Sets coleção de valores unicos evita haver valores duplicados
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(new Set('Tiago'));
console.log(orderSet.size); // do the same thing that length in arrays
console.log(orderSet.has('Pizza')); // do the same thing that includes in arrays
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
//orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const posStaff = [...new Set(staff)]; // o spread funciona igual como no array
console.log(posStaff);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
*/

/*
//Looping Objects
//Property Names
const propreties = Object.keys(openingHours);
console.log(propreties);

let openStr = `We are open on ${propreties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);
*/
/*
// Entire object
const entries = Object.entries(openingHours);
//console.log(entries);
// Destructuring
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/
/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//With Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays1) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed'; // Se quisermos usar uma variavel como nome de propriedade basicamente precisamos usar [].
  console.log(`On ${day}, the restaurant open ${open}`);
}
*/
/*
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//Arrays
const users = [{ name: 'Jonas', email: 'hello@honas.io' }];
console.log(users[0]?.name ?? 'User array empty');
*/
/*
// FOR OF
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);
*/
/*
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests = rest1.numGuests || 10;
//Forma mais curta para fazer as linhas de cima
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;
//Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
//And assignment operator
rest1.owner &&= 'Anonimous';
rest2.owner &&= 'Anonimous';

console.log(rest1);
console.log(rest2);

/*
// ?? Nullish operator

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
//Short Circuiting (&& and ||)

console.log('------- OR -------');
// Use Any data type, return ANY data type, short-circuting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------- AND -------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

// Pratical example
/*
if (restaurant.orderPizza) {
  restaurant.orderPizza('Cogumelos', 'Espinafres');
}

restaurant.orderPizza && restaurant.orderPizza('Cogumelos', 'Espinafres');
*/
// Rest
/*
//1. Destructuring
//SPREAD, because on Right side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
*/

/*
//2. Functions
const add = function (...numbers) {
  // Rest operator
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // Spread operator!

restaurant.orderPizza('Cogumelos', 'Frango', 'Queijo');
restaurant.orderPizza('Frango');
*/
/*
// Spread operator
const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy Array

const mainMenuCopy = [...restaurant.mainMenu];
*/
/*
// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
*/
/*
const str = 'Tiago';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
*/
/*
// Real life example
const ingredients = [
  prompt('Vamos fazer uma massa! Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];

restaurant.orderPasta(...ingredients);
*/
/*
// Objects with Spread
const newRestaurant = { foundedIn: 2001, ...restaurant, founder: 'Sanina' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Sanina';
console.log(restaurant.name, restaurantCopy.name);
*/

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Rua das caixas',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Rua das caixas',
  starterIndex: 1,
});

//Destructring Objects

const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);
/*
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
*/
/*
// Mutating variables
let a = 111;
let b = 999;
let c = 32;
const obj = { a: 23, b: 7, c: 14 };

({ a, b, c } = obj);

console.log(a, b, c);
*/
/*
//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);*/
/*
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
*/
//Switching Variables
/*
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/
/*
//Easier way to destruct an array
[main, secondary] = [secondary, main];
console.log(main, secondary);
*/
/*
// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9]; // seting default values
console.log(p, q, r);
*/
