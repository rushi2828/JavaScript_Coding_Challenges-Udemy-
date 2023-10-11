'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Passing single object variable
  orderDelivery: function (obj) {
    console.log(obj);
  },

  // Passing all 4 parameters
  orderDelivery1: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received!!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deleiverd to ${address} at ${time}`
    );
  },

  orderDelivery2: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '19:30',
    address,
  }) {
    console.log(
      `Order received!!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deleiverd to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2} and ${ing3}`);
  },
};

/*
/////////////////////////////////////
Destructuring objects
*/

// restaurant.orderDelivery({
//   time: '20:30',
//   address: 'PMC',
//   mainIndex: 2,
//   starterIndex: 3,
// }); //{time: '20:30', addrress: 'PMC', mainIndex: 2, starterIndex: 3}

// restaurant.orderDelivery1({
//   time: '20:30',
//   address: 'PMC',
//   mainIndex: 2,
//   starterIndex: 3,
// }); //Order received!!! Caprese Salad and Risotto will be deleiverd to PMC at 20:30

// restaurant.orderDelivery2({
//   address: 'home address of PMC',
// }); //Order received!!! Bruschetta and Pizza will be deleiverd to home address of PMC at 19:30

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); //Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// // giving new names to the variables
// const {
//   name: restaurentName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurentName, hours, tags); //Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// console.log('====');

// // Default values - if variable value is not assigned/defiend then default value will be print

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters); //[] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// console.log('====');

// // Mutating variables
// let m = 111;
// let k = 999;

// const obj = { m: 10, k: 20, o: 3 };
// ({ m, k } = obj);
// console.log(m, k); //10, 20
// console.log('====');

// // Nested objects
// // printing an arry
// const { fri } = openingHours;
// console.log(fri); //{open: 11, close: 23}
// console.log('====');

// // printing values from an array
// const {
//   sat: { open, close },
// } = openingHours;

// console.log(open, close); // 0 24
// console.log('====');

// // printing values from an array by assigning another variables
// const {
//   sat: { open: o, close: c },
// } = openingHours;

// console.log(o, c); // 0 24
// console.log('====');

/*
/////////////////////////////////////
Destructuring arrays
*/

// // Normal way to retrive element
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// // Destructuring array's
// const [x, y, z] = arr;
// console.log(x, y, z);

// // retrive element directly from an arry
// let [first, second] = restaurant.categories;
// console.log(first, second); //Italian Pizzeria

// // retrive element and we want to skip the second element
// const [firstOne, , thirdOne] = restaurant.categories;
// console.log(thirdOne); // Vegetarian

// // Switching variables by reaassigning value
// [first, second] = [second, first];
// console.log(first, second);

// console.log(restaurant.order(2, 0));
// console.log('====');

// // Destructring an array- Receive 2 return values from  functions
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);
// console.log('====');

// // myTask - retrieve Bruschetta(1), Caprese Salad(3)
// const [A, B] = restaurant.order(3, 1);
// console.log(A, B); // ['Garlic Bread', 'Pizza']
// console.log('====');

// // Destructuring nested array
// const nested = [1, 2, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j); // 1,[4,5]
// console.log('====');

// //Destructuring inside destructing
// const [p, , [q, r]] = nested;
// console.log(p, q, r); //1,4,5

// // Default values i.e if variable is not declaring then it's showing 'undefined'
// const [s, t, u] = [8, 9];
// console.log(s, t, u); // 8 9 undefined

// const [d = 1, f = 2, g = 3] = [9];
// console.log(d, f, g); // 9 2 3

/*
/////////////////////////////////////
Spread operator i.e (...)
*/

const arr1 = [1, 2, 3, 4];

const arr2 = [...arr1, 5, 6];
const arr3 = [8, 9, ...arr2];
console.log(arr2); //[1, 2, 3, 4, 5, 6]
console.log('====');

console.log(arr3); // [8, 9, 1, 2, 3, 4, 5, 6]
console.log('====');

console.log(restaurant.mainMenu); //['Pizza', 'Pasta', 'Risotto']
console.log('====');
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //['Pizza', 'Pasta', 'Risotto', 'Gnocci']
console.log('====');

// Copy array(Shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
console.log('====');

//Join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); //['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
console.log('====');

// Spred operator works for Iterables i,e arrays, Sting, maps, sets but not objects
const str = 'Rushikesh';
console.log(...str); //R u s h i k e s h
console.log('====');

const letters = [...str, '', 'S'];
console.log(letters); //['R', 'u', 's', 'h', 'i', 'k', 'e', 's', 'h', '', 'S']
console.log('====');
// const ingrediants = [ prompt("Lets\'s make pasta ingredients 1?)", prompt('ingredients2'), prompt('ingredients 3'),];
// console.log(ingrediants);

// const ingrediants = [
//   prompt("Let's male pasta ingredients1?"),
//   prompt('ingredients2'),
//   prompt('ingredients3'),
// ];
// console.log(ingrediants);

// restaurant.orderPasta(...ingrediants); //Here is your pasta with egg,curry and onion

// Object
const newRestaurant = { foundedIn: 1998, ...restaurant, Founder: 'Rushi' };

console.log(newRestaurant);
console.log('====');

/*
/////////////////////////////////////
Rest operator i.e (...) and Parameters
REST because of left side i.e before '='
*/

const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, others); //1 2 (5) [3, 4, 5, 6, 7]
console.log('====');

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood); //Pizza Pasta (5) ['Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
console.log('====');
// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays); //{open: 0, close: 24} {thu: {…}, fri: {…}}
console.log('====');

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2);
add(3, 4, 5, 6, 7);
add(8, 9, 0, 11, 12, 13, 14);
console.log('====');

/*
/////////////////////////////////////
Rest operator i.e (...) and Parameters
Short circuiting i.e && and || operator
-It is used in ANY data types and return ANY data types 

*/
console.log(5 || 'rushi'); // 5

/*
Short circuiting (for || operator )
- return first true value 
- return last falsy value if all values are falsy 
- Falsy value's are:= ' ', undefined, false 
*/
console.log('=====OR=====');
console.log('' || 'Rushi'); // Rushi
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(0 || ''); // empty (both falsy)

console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello (first non-falsy value will be printing)

// Practical example
// without short circuiting i.e || operator
const guest1 = restaurant.newGuest ? restaurant.newGuest : 10;
console.log(guest1); // 10 (restaurant.newGuest does not exist that's why it falsy so 10 printed )
// with short circuiting i.e || operator
console.log(restaurant.newGuest || 10); //10

/*
Short circuiting (for &&  operator )
- return first falsy value 
- exact opposite of OR(||) operator
Falsy value's are:= ' ', undefined, false 
*/
console.log('=====AND=====');
console.log(8 && 'Rushi'); //Rushi
console.log(0 && 'Rushi'); //0
console.log('' && 'Rushi'); // ''
console.log(true && 0); // 0
console.log(undefined && null); // undefined // undefined
console.log(0 && ''); // 0
console.log(undefined && 0); // undefined

// Practical example
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
/////////////////////////////////////
Nullish coalescing operator(??)
*/

// restaurant.newGuest = 0;
const guest2 = restaurant.newGuest || 10;
console.log(guest2); // 10
console.log('====');

// Nullish values : null and undefined (Not 0 and '')
// return other values if there is null and undefined
// 0 and '' not considering nullish values so it will return
const guestCorrect = restaurant.newGuest ?? 10;
console.log(guestCorrect);
console.log('====');

/*
/////////////////////////////////////
Logical Assignment operator
*/

const rest1 = {
  name: 'don',
  numGuests: 0,
};

const rest2 = {
  name: 'mod plazza',
  owner: 'D Ben',
};

// short circuiting, return true value for || operator
rest1.numGuests = rest1.numGuests || 10;
console.log(rest1); // {name: 'don', numGuests: 20}
console.log('====');
rest2.numGuests = rest2.numGuests || 10;
console.log(rest2); // {name: 'mod plazza', owner: 'D Ben', numGuests: 10}
console.log('====');

// OR assigning operator
rest1.numGuests ||= 10; //same like : rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests ||= 10; // same like : rest2.numGuests = rest2.numGuests || 10;

console.log(rest1); // {name: 'don', numGuests: 10}
console.log(rest2); // {name: 'mod plazza', owner: 'D Ben', numGuests: 10}
console.log('====');

//nullish assigning operator
rest1.numGuests ??= 10; //same like : rest1.numGuests = rest1.numGuests && 10;
rest2.numGuests ??= 10; //same like : rest2.numGuests = rest1.numGuests && 10;

console.log(rest1); // {name: 'don', numGuests: 0}
console.log(rest2); // {name: 'mod plazza', owner: 'D Ben', numGuests: 10}
console.log('====');

// AND  assigning operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'; //same like : rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>'; // same like : rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest1); //{name: 'don', numGuests: 10, owner: undefined}
console.log(rest2); //{name: 'mod plazza', owner: '<ANONYMOUS>', numGuests: 10}
