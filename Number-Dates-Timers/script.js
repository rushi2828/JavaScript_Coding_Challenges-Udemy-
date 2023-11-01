'strict mode';
/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

///////////////////////////////////////

// convert strings into number

// all previously we used
const num = Number('23');
console.log(typeof num); //number

// also we convert by + operator
const num1 = +'23';
console.log(typeof num1); //number
console.log('===========');

// Parsing
// Parsing the number from string
//  second parameter is radix:  the radix as a 32-bit integer is smaller than 2 or bigger than 36
console.log(Number.parseInt('30kjkfg', 10)); // 30
// condition for parseInt method is string should be start with number
console.log(Number.parseInt('kjkfg30', 10)); // NaN        NotaNumber
console.log('===========');

// parseFloat
console.log(Number.parseFloat('2.5px')); //2.5
console.log(Number.parseInt('2.5px')); //2
console.log('===========');

// Check if value is Not a Number
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false
console.log('===========');

// checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20x')); //false
console.log(Number.isFinite(20 / 0)); //false
console.log('===========');

///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(9)); //3
console.log(Math.max(2, 3, 4, 6)); //6
console.log(Math.max(2, 3, 4, 6, '30px')); //NaN

console.log(Math.min(2, 3, 4, 6)); //2
console.log(Math.min(2, 3, 4, 6, '30px')); //NaN
console.log('===========');

console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

// generating random number
// Math.random which will always in between 0...1
console.log(Math.random() * 5); //2.523993389008524
console.log(Math.trunc(Math.random() * 5)); //2

const randomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min) + 1) + min; //// 0...1 -> 0...(max - min) -> min...max
console.log(randomNumber(10, 20));
console.log('===========');

// Rounding integers
console.log(Math.trunc(34.5)); //34

console.log(Math.round(23.1)); //23
console.log(Math.round(23.5)); //24
console.log(Math.round(23.9)); //24

console.log(Math.ceil(22.1)); //23
console.log(Math.ceil(22.9)); //23

console.log(Math.floor(22.5)); //22
console.log(Math.floor(22.9)); //22

// floor is better than trunc whne it comes to negative number
console.log(Math.trunc(-22.9)); //-22
console.log(Math.floor(-22.3)); //-23
console.log('===========');

// Rounding decimlas,
// toFixed return a string representing a number in fixed-point notation.
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(4)); //2.7000
console.log((2.7).toFixed(8)); //2.70000000
console.log((2.123456).toFixed(2)); //2.12

console.log((-3.123).toFixed(2)); //-3.12
console.log('===========');

// Remainder
console.log(5 % 2); //1
console.log(5 / 2); //2.5 // 5 = 2 * 2 + 1 // here remainder is 1

console.log(8 % 3); //2

const isEven = num => num % 2 === 0;
console.log(isEven(6)); //true

console.log(isEven(7)); //false

const isEven1 = num => (num % 2 === 0 ? 'number is even' : 'number is odd');
console.log(isEven1(6)); //number is even

console.log(isEven1(7)); //number is odd

// Numeric separators - sytarted from ES2021
const diameter = 287_456_000_000;
// should not use __ or before or after number i.e _34 and 34_
console.log(diameter); //287456000000  it will ignore _
console.log('===========');

//////////////////////////////////
//Create Date - 4 ways

// 1 way
const now = new Date();
console.log(now); // Sun Oct 29 2023 21:57:56 GMT+0530 (India Standard Time)

// 2 way
const d = new Date('Oct 29 2023 21:57:56');
console.log(d); //Sun Oct 29 2023 21:57:56 GMT+0530 (India Standard Time)

console.log(new Date(account1.movementsDates[0])); //Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)

// below we passed 10 which mean Oct but js start from 0 index so it take Nov
console.log(new Date(2023, 10, 15, 12, 45, 8)); //Wed Nov 15 2023 12:45:08 GMT+0530 (India Standard Time)

console.log(new Date(0)); //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)
console.log('============');

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log('=========');

////////////////////
// setTimeOut

//In below code output will be
//first print 'Waiting...' then after 4 seconds wait and then print 'here is your pizza🍕'
// setTimeout(() => console.log('here is your pizza🍕'), 4000); //here is your pizza"🍕  - print this after 4 sec
// console.log('Waiting...');

// passing arguments in setTimeOut

// setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`),
//   4000,
//   'olives',
//   'spinach'
// ); //Here is your pizza with olives and spinach🍕 - print this after 4 sec
// console.log('Waiting...');

//cancel the timeout
const ingrediants = ['olives', 'tomato'];
const pizzTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`),
  4000,
  ...ingrediants
);
console.log('Waiting...');
console.log('====================');

if (ingrediants.includes('spinach')) clearTimeout(pizzTimer);
// it means if spinach is in an array then setTimeOut not executing only we get 'Waiting...' in console and if removed or replaced spinach from an arry then
// after 'Waiting...' and 4 sec timeout then 'Here is your pizza with ${ing1} and ${ing2} 🍕' this will print
// Here is your pizza with olives and tomato🍕

// setInterval
// setInterval(function () {
//   const now = new Date();
//   const date = now.getDate();
//   const month = now.getMonth() + 1;
//   const year = now.getFullYear();
//   const hr = now.getHours();
//   const min = now.getMinutes();
//   const sec = now.getSeconds();

//   console.log(now); //// printing current time after every 2 seconds selay
//   console.log(`${date}/${month}/${year} - ${hr}:${min}:${sec}`); // printing current time after every 2 seconds selay
// }, 2000);
