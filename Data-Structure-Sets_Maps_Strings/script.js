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
};

/*
/////////////////////////////////////
DS-Sets
*/
// print unique values
const ordersSet = new Set(['pizza', 'pasta', 'pizza', 'burger', 'bread']);
console.log(ordersSet); //{'pizza', 'pasta', 'burger', 'bread'}
console.log('======');

console.log(new Set('rushi')); //{'r', 'u', 's', 'h', 'i'}
console.log('======');

console.log(ordersSet.size); //4
console.log('======');

console.log(ordersSet.has('pasta')); //true;
console.log('======');

console.log(ordersSet.has('cabage')); //false;
console.log('======');

console.log(ordersSet.add('toast')); // {'pizza', 'pasta', 'burger', 'bread', 'toast'}
console.log('======');

ordersSet.delete('toast');
console.log(ordersSet); //{'pizza', 'pasta', 'burger', 'bread'}
console.log('======');

//for of
for (const order of ordersSet) console.log(order);
/*  pizza
pasta
burger
bread
*/

// Convert array in set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); //['Waiter', 'Chef', 'Manager']

/*
/////////////////////////////////////
DS-Map
*/
const rest = new Map();
rest.set(1, 'Classico Italiano');
rest.set('name', 'Italy hotel');
console.log(rest); //{1 => 'Classico Italiano', 'name' => 'Italy hotel'}
console.log(rest.set(2, 'Portugal')); //{1 => 'Classico Italiano', 'name' => 'Italy hotel', 2 => 'Portugal'}
console.log('======');

rest
  .set('categories', ['Italiano', 'Pizzaria', 'Vegetarian', 'organic'])
  .set('open', 11)
  .set('close', 20)
  .set(true, 'we are open :D')
  .set(false, ' we are close');

console.log(rest.get('name')); //Italy hotel
console.log(rest.get(true)); //we are open :D
console.log(rest.get(false)); // we are close
console.log('======');

const time = 14;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //we are open :D
console.log('======');

console.log(rest.has('close')); //true
console.log(rest.has('ose')); //false
console.log('======');

rest.delete(1);
console.log(rest); //{'name' => 'Italy hotel', 2 => 'Portugal', 'categories' => Array(4), 'open' => 11, 'close' => 20, …}
console.log('======');

console.log(rest.size); //7
console.log('======');

// array as key
// rest.set([1, 2], 'test');// it can be set but unable to retrive rest.get([1,2])

const arr = [1, 2];
rest.set('arr', 'test');

console.log(rest.get([1, 2])); //undefined
console.log(rest.get('arr')); // test

// Map: Iteration
const question = new Map([
  ['question', 'What is best programming language?'],
  [1, 'Java'],
  [2, 'JavaScript'],
  [3, 'Python'],
  ['correct', 2],
  [true, 'Correct😊'],
  [false, 'Try again😒'],
]);

// convert object into map
console.log(question);
console.log(Object.entries(restaurant.openingHours));

const hourMap = new Map(Object.entries(restaurant.openingHours));
console.log(hourMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer of ${key} is ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
console.log('======');
// convert map to array
console.log(...question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
console.log('======');

/*
/////////////////////////////////////
Strings
*/
const airLine = 'Indian Airlines Company';
console.log(airLine[0]); //I

console.log('Indian'[1]); //n

console.log(airLine.length); // 15
//directly on string
console.log('rushi'.length); //5

console.log(airLine.indexOf('i')); // 3 giving first index
console.log(airLine.lastIndexOf('i')); // 11
console.log(airLine.indexOf('Airlines')); // 7

console.log('======');

// slice [always return new strings]
console.log(airLine.slice(7)); //Airlines Company i.e begin with index 7
console.log(airLine.slice(7, 14)); //Airlines (output lenth is 14-7 = 7)
console.log('======');

console.log(airLine.slice(0, airLine.indexOf(' '))); //Indian
console.log('======');

console.log(airLine.slice(airLine.lastIndexOf(' '))); // Company
console.log('======');

console.log(airLine.slice(-2)); // ny
console.log('======');

console.log(airLine.slice(0, -1)); //Indian Airlines Compan
console.log('======');

// some other string methods
console.log(airLine.toLowerCase()); //indian airlines company
console.log(airLine.toUpperCase());
// also directly to string

console.log('Rushi'.toLowerCase());
console.log('Rushi'.toUpperCase());

// capitalisation in name
const passenger = 'ruSHIkesh';
const passengerLowerCase = passenger.toLocaleLowerCase();
const passengerCorrectName =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrectName);

// comparing an email
const email = 'rushi@.io';
const loginEmail = ' RuShI@.iO   \n';

const lowermail = loginEmail.toLowerCase();
const trimmedEmail = lowermail.trim();
console.log(trimmedEmail);

// single line
const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(normalEmail === email);

// replacing
const price = '123457&';
console.log(price.replace('&', '$'));

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// replace first occurence
console.log(announcement.replace('door', 'gate')); //All passengers come to boarding gate 23. Boarding door 23!

// for all replacment using regular expression
console.log(announcement.replace(/door/g, 'gate'));

// booleans
const plane = 'A320neo';
console.log(plane.includes('A32')); //true
console.log(plane.includes('hyu')); //false
console.log(plane.startsWith('A3')); //true

//.split method return an arry
console.log('A+string+is+very+nice'.split('+'));

const [firstName, lastName] = 'Rushi Mane'.split(' ');

const myName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(myName);

//
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('this is the right time'); //This Is The Right Tim
capitalizeName('rushikesh mane'); //Rushikesh Mane

// padding
const msg = 'Go to gate no 23';
console.log(msg.padStart(20, '+').padEnd(35, '+')); //++++Go to gate no 23+++++++++++++++
console.log('Test'.padStart(14, '+').padEnd(15, '+')); //++++++++++Test+

// repeat
console.log('rushikesh mane'.repeat(3));

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
